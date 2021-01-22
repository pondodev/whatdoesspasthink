window.onload = () => {
    var maxReviews = 5;
    var index = Math.floor(Math.random() * Math.floor(maxReviews));
    var id = "review-" + index;

    console.log(id);
    document.getElementById(id).style = "display: block"
}