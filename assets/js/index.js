
if(window.location.pathname == "/"){
    $ondelete = $("table tbody tr td.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        
        var request = {
            url: "http://localhost:3000/api/menus/"+id,
            method: "delete"
        }

        if(confirm("Do you really want to delete this single record?")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully!");
                location.reload()
            })
        }
    })
}