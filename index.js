window.onload = () => {
    var maxReviews = 6;
    var index = Math.floor(Math.random() * Math.floor(maxReviews));
    var id = "review-" + index;

    document.getElementById(id).style = "display: block"
}