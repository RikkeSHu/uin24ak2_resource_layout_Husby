document.addEventListener('DOMContentLoaded', function () {

    window.showCategory = function (category) {
        const resourcesContainer = document.getElementById('resourcesContainer');
        resourcesContainer.innerHTML = ''; 

        const selectedCategory = resources.find(item => item.category === category);

        if (selectedCategory) {

            var categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';

            var categoryHeading = document.createElement('h2');
            categoryHeading.textContent = selectedCategory.category;

            var textParagraph = document.createElement('p');
            textParagraph.textContent = selectedCategory.text;

            var sourcesList = document.createElement('ul');

            for (var j = 0; j < selectedCategory.sources.length; j++) {
                var source = selectedCategory.sources[j];
                var sourceItem = document.createElement('li');
                var sourceLink = document.createElement('a');
                sourceLink.href = source.url;
                sourceLink.textContent = source.title;
                sourceItem.appendChild(sourceLink);
                sourcesList.appendChild(sourceItem);
            }

            categoryDiv.appendChild(categoryHeading);
            categoryDiv.appendChild(textParagraph);
            categoryDiv.appendChild(sourcesList);

            resourcesContainer.appendChild(categoryDiv);
        }
    };
    showCategory('HTML');
});
