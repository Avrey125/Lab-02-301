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
  $.get('../data/page-1.json', data => {
    data.forEach(horn => {
      var hornz = new Horns(horn);
      hornz.render();
  })
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

// Feature 2
//given that a user clicks on the dropdown menu
//When the user has selected one of the options
//then only the images whose keyword matches the the option should be displayed


let filterKeywords = ['stuff'];

const populateFilter = () => {

  allHorns.forEach(image => {
    if( ! filterKeywords.includes(image.keyword)){
      filterKeywords.push(image.keyword);
    }
  })
  filterKeywords.sort();
  filterKeywords.forEach(keyword => {
    let optionTag = `<option value = "${keyword}"> ${keyword}</option>`
    $(select).append(optionTag);
  })
}

const handleFilter = () => {
  $(select).on('change', function() {
    let selected = $(this).val();
    if( selected !== 'default'){
      $('section').hide();
      $('section').$(selected).fadeIn();
    }
  })
}
handleFilter();
