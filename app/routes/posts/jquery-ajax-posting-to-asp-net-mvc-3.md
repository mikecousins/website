---
author: "Mike Cousins"
category: "Development"
date: 2012-06-12T23:04:49Z
description: ""
draft: false
slug: "jquery-ajax-posting-to-asp-net-mvc-3"
tags: ["ASP.NET MVC", "Javascript", "jQuery", "AJAX", "C#"]
title: "jQuery AJAX POSTing to ASP.NET MVC 3"
cover: "https://www.fillmurray.com/200/300"

---

Getting your model binding to work properly with jQuery takes a bit of trial and
error if you're just getting started. There are a couple ways to send your data
and you don't really know which way is going to bind properly to which C# type.
Here is a quick example for reference after I got multiple photo deletion
working on [Shuttr](http://shuttr.com). The basic gist of this is that binding an
array of ints in Javascript requires an ICollection  in C# to make the magic
happen.

Our Telerik photo grid has a checkbox column named checkedPhotos and it's value
is the photo ID:

```csharp
column.Bound(p => p.Id)
    .ClientTemplate("<input type='checkbox' name='checkedPhotos' value='<#= Id #>' />")
```

Clicking the delete button fires the deleteCheckedPhotos() Javascript function.
Inside we check to make sure some photos are checked, ask for confirmation, then
make an AJAX request to delete the photos, then AJAX refresh the photo grid.

```javascript
<script type="text/javascript">
function deleteCheckedPhotos() {
    var $checkedRecords = $(':checked');
    if ($checkedRecords.length < 1) {
        alert('No photos selected');
        return;
    }
    else
    {
        if (confirm('Are you sure you want to delete the ' + $checkedRecords.length + ' checked photo(s)?')) {
            $.post('@Url.Action("DeleteCheckedPhotos", "Account")', $checkedRecords)
                .complete(function () {
                var grid = $("#PhotoGrid").data('tGrid');
                grid.ajaxRequest();
            });
        }
    }
}
</script>
```

In our controller we get the values from the AJAX request as an ICollection:

```csharp
[Authorize(Roles = "Photographer")]
public ActionResult DeleteCheckedPhotos(ICollection<int> checkedPhotos)
{
    // make sure we got some data
    if (checkedPhotos == null)
    {
        return Json(null);
    }

    // delete the specified photos
    foreach (var photoId in checkedPhotos)
    {
        _photoRepository.DeletePhoto(photoId);
    }

    return Json(null);
}
```

That's all there is to it. This stuff is getting pretty easy!
