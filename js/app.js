function setImg(){
    opt = [
        "BaconGallupPark.jpg",
        "bacon_in_the_woods.png",
        "bacon_near_the_fort.png",
        "bend_in_the_road.png",
        "blooming_trees.png",
        "downed_tree.png",
        "falling_petals.png",
        "fort_in_woods.png",
        "hanging_plants.png",
        "hollow_tree.png",
        "huron_river_cascades.JPG",
        "lake_view.JPG",
        "mist_over_huron_river.JPG",
        "munising.jpg",
        "pink_blossoms.png",
        "potted_plants.png",
        "red_maple.png",
        "reflected_tree.JPG",
        "tree_with_white_blooms.png",
        "tulips.png",
        "white_buds_on_tree.png"
    ]

    currentImg = document.querySelectorAll("..flex-container img")
    for (var i = 0; i < currentImg.length; i++){
        console.log("Image " + i);

        randomImg = "images/" + opt[Math.floor(Math.random() * opt.length)];

        currentImg[i].src = randomImg;

        currentImg[i].setAttribute("tabindex", "0")
    }
    
}