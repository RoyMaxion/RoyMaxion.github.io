/*
 * this file is a renderer of the publication list.
 * to modify the list itself, edit js/publications-list.js
 */

function createPublicationCard(paper) {
    var cardDOM = document.createElement('div');
    cardDOM.className = 'card';

    // add keyword
    if (paper.keywords) {
        var keywordsDOM = document.createElement('span');
        keywordsDOM.appendChild(document.createTextNode(paper.keywords));
        keywordsDOM.className = 'caption';
        cardDOM.appendChild(keywordsDOM);
    }

    // add title
    if (paper.link) {
        var titleDOM = document.createElement('a');
        titleDOM.href = paper.link;
        titleDOM.setAttribute('target', '_blank');
        var titleTextDOM = document.createElement('h3');
        titleTextDOM.className = 'hover-effect-link';
        titleTextDOM.appendChild(document.createTextNode(paper.title));
        titleDOM.appendChild(titleTextDOM);
        cardDOM.appendChild(titleDOM);
    } else {
        var titleDOM = document.createElement('h3');
        titleDOM.className = 'not-available';
        titleDOM.appendChild(document.createTextNode(paper.title));
        var titleHintDOM = document.createElement('span');
        titleHintDOM.className = 'hint-text';
        titleHintDOM.appendChild(document.createTextNode('(Link not publicized yet)'));
        titleDOM.appendChild(titleHintDOM);
        cardDOM.appendChild(titleDOM);
        cardDOM.setAttribute('title', 'This paper is not available on the internet at the moment.');
    }

    // add citation
    if (paper.citation) {
        var citationDOM = document.createElement('p');
        citationDOM.appendChild(document.createTextNode(paper.citation));
        cardDOM.appendChild(citationDOM);
    }

    // add date published
    if (paper.date) {
        var dateDOM = document.createElement('span');
        dateDOM.className = 'tag';
        dateDOM.setAttribute('title', 'Date published');
        var dateIconDOM = document.createElement('span');
        dateIconDOM.className = 'material-icons';
        dateIconDOM.appendChild(document.createTextNode('event'));
        dateDOM.appendChild(dateIconDOM);
        dateDOM.appendChild(document.createElement('span')).appendChild(document.createTextNode(paper.date));
        cardDOM.appendChild(dateDOM);
    }

    // add publisher
    if (paper.publisher) {
        var publisherDOM = document.createElement('span');
        publisherDOM.className = 'tag';
        publisherDOM.setAttribute('title', 'Publisher');
        var publisherIconDOM = document.createElement('span');
        publisherIconDOM.className = 'material-icons';
        publisherIconDOM.appendChild(document.createTextNode('text_snippet'));
        publisherDOM.appendChild(publisherIconDOM);
        publisherDOM.appendChild(document.createElement('span')).appendChild(document.createTextNode(paper.publisher));
        cardDOM.appendChild(publisherDOM);
    }

    // add "see who cited this"
    if (paper.citedBy) {
        var citedByDOM = document.createElement('a');
        citedByDOM.className = 'tag hover-effect-link';
        citedByDOM.href = paper.citedBy;
        citedByDOM.setAttribute('target', '_blank');
        var citedByIconDOM = document.createElement('span');
        citedByIconDOM.className = 'material-icons';
        citedByIconDOM.appendChild(document.createTextNode('format_quote'));
        citedByDOM.appendChild(citedByIconDOM);
        citedByDOM
            .appendChild(document.createElement('span'))
            .appendChild(document.createTextNode('See who cited this'));
        cardDOM.appendChild(citedByDOM);
    }

    // add "view scripts and data set"
    if (paper.dataSet) {
        var dataSetDOM = document.createElement('a');
        dataSetDOM.className = 'tag hover-effect-link';
        dataSetDOM.href = paper.dataSet;
        dataSetDOM.setAttribute('target', '_blank');
        var dataSetIconDOM = document.createElement('span');
        dataSetIconDOM.className = 'material-icons';
        dataSetIconDOM.appendChild(document.createTextNode('stacked_bar_chart'));
        dataSetDOM.appendChild(dataSetIconDOM);
        dataSetDOM
            .appendChild(document.createElement('span'))
            .appendChild(document.createTextNode('View data set and scripts'));
        cardDOM.appendChild(dataSetDOM);
    }

    return cardDOM;
}

/*
 * this function is executed when the webpage finishes loading.
 */
(function () {
    var cardListDOM = document.getElementById('publication-list');

    publicationList.forEach((paper) => {
        cardListDOM.appendChild(createPublicationCard(paper));
    });

    // update the publication count
    var publicationCountDOM = document.getElementById('publication-count');
    publicationCountDOM.innerHTML = publicationList.length.toString();
})();
