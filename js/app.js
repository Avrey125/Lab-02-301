'use strict';

const allHorns = [];
// {
//     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//     "title": "UniWhal",
//     "description": "A unicorn and a narwhal nuzzling their horns",
//     "keyword": "narwhal",
//     "horns": 1
//   },

function Horns(horn){
    this.image_url = horn.image_url;
    this.title = horn.title;
    this.description = horn.description;
    this.keyword = horn.keyword;
    this.horns = horn.horns;

    allHorns.push(this);
}
//AJAX

//use ajax to get the data file
//then run each horn through the constructor function
// then call the render method on each horn instance
// need an array to hold all the horn instances
$.get('data/page-1.json', data => {
  data.forEach(horn => {
    var hornz = new Horns(horn);
    hornz.render();
  });
  populateFilter();
})

Horns.prototype.render = function() {
  const myTemplate = $('#horn-template').html();
  const $newSection = $('<section></section>');
  $newSection.html(myTemplate);
  
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('src', this.image_url);

  $('main').append($newSection);
  $newSection.attr('class', this.keyword);
}

$().ready(
);

// //feature 2 (Lena's code review)

  // this function 
  const populateFilter = () => {
    let filterKeywords = [];
    
  allHorns.forEach(image => {
    if( ! filterKeywords.includes(image.keyword)){
      filterKeywords.push(image.keyword);
    }
  })
  filterKeywords.sort();
  filterKeywords.forEach(keyword => {
    let optionTag = `<option value = "${keyword}"> ${keyword}</option>`
    $('select').append(optionTag);
  })
}


// Day 4 Feature 1 Pagination

//add navigation for the user to switch between two pages. 

//Each page should render a unique set of images from one of the two provided JSON files.

//Reset the filters, then repopulate them using only keywords from the images currently being displayed.

$.get('data/page-2.json', data => {
  data.forEach(horn => {
    var hornz = new Horns(horn);
    hornz.render2();
  });
  populateFilter();
})

Horns.prototype.render2 = function() {
  const myTemplate = $('#horn-template2').html();
  const $newSection = $('<section></section>');
  $newSection.html(myTemplate);
  
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('src', this.image_url);
  
  $('main').append($newSection);
  $newSection.attr('class', this.keyword);
}



//event listener w/ annomynous function
const handleFilter = () => {
  $('select').on('change', function() {
    // find the value of the thing that was changed
    let selected = $(this).val();

    // as long as it wasn't the default;
    if (selected !== 'default'){
      $('section').hide();
      //fade in only the thing that was clicked on
      $(`section.${selected}`).fadeIn();
    }
  })
}
handleFilter();


