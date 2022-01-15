var image_prev = "1_before.jpg";
var image_next = "1_after.jpg";
var pet_id = 1;

function changeImage()
{
        var img = document.getElementById("image");
        img.src=image_next;
        return false;
}

function resetImage()
{
        var img = document.getElementById("image");
        img.src=image_prev;
        return false;
}

function NextPet()
{
        if (pet_id < 6)
            pet_id = pet_id + 1;
         else
            pet_id = 1;
        image_prev = "/static/" + pet_id + "_before.jpg";
        image_next = "/static/"+ pet_id + "_after.jpg";
        resetImage();
}

function complete()
{
    var  text_entry = document.getElementById("Entry");
    text_entry.value = " ";
    $("#Entry").fadeIn();
}

function Erase()
{
    var  text_entry = document.getElementById("Entry");
    $("#Entry").fadeOut(2000, complete);
}