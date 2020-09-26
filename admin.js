function edit()
{
    var new_height = document.getElementById("height").value;
    var new_width = document.getElementById("width").value;
    document.photo.height = new_height;
    document.photo.width = new_width;
}

function changecolor(color)
{
    document.body.style.backgroundColor = color;

}