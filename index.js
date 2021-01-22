window.onload = () => {
    var maxReviews = 5;
    var index = Math.floor(Math.random() * Math.floor(maxReviews));
    var id = "review-" + index;

    document.getElementById(id).style = "display: block"
}