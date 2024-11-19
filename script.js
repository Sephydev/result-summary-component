document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("container");

            for (let i = 0; i < data.length; i++) {
                const categoryContainer = document.createElement("div")
                categoryContainer.classList.add("container")

                const catContainer = document.createElement("div")
                catContainer.classList.add("category-container", data[i].category.toLowerCase() + "-container")

                const titleContainer = document.createElement("div")
                titleContainer.classList.add("category-title-container")

                const imgCategory = document.createElement("img")
                imgCategory.classList.add("icon")
                imgCategory.src = data[i].icon
                imgCategory.width = "20";
                imgCategory.ariaHidden = true;

                const titleCategory = document.createElement("p")
                titleCategory.classList.add("category-title", data[i].category.toLowerCase() + "-title")
                titleCategory.textContent = data[i].category

                const categoryScore = document.createElement("p")
                categoryScore.classList.add("category-score")
                categoryScore.textContent = data[i].score
                const totalScore = document.createElement("span")
                totalScore.classList.add("total-score")
                totalScore.textContent = " / 100"
                categoryScore.appendChild(totalScore)

                titleContainer.appendChild(imgCategory)
                titleContainer.appendChild(titleCategory)
                catContainer.appendChild(titleContainer)
                catContainer.appendChild(categoryScore)
                categoryContainer.appendChild(catContainer)
                container.appendChild(categoryContainer)

                const topLeftCorner = document.createElement("div")
                topLeftCorner.classList.add("corner", "top-left", data[i].category.toLowerCase() + "-corner")
                const topRightCorner = document.createElement("div")
                topRightCorner.classList.add("corner", "top-right", data[i].category.toLowerCase() + "-corner")
                const bottomRightCorner = document.createElement("div")
                bottomRightCorner.classList.add("corner", "bottom-right", data[i].category.toLowerCase() + "-corner")
                const bottomLeftCorner = document.createElement("div")
                bottomLeftCorner.classList.add("corner", "bottom-left", data[i].category.toLowerCase() + "-corner")

                categoryContainer.appendChild(topLeftCorner)
                categoryContainer.appendChild(topRightCorner)
                categoryContainer.appendChild(bottomRightCorner)
                categoryContainer.appendChild(bottomLeftCorner)
            }
        })
})