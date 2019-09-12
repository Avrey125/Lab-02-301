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
  renderDropDown();

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

//feature 2 (Lena's code review)
function renderDropDown () {


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

  //I need to make a dropdown all of the keywords
  //I need to have a list of the keywords
      //create an array to store the keywords
      //populate by using forEach on the allHorns
      //filter out the duplicates
      //now we have an array of only the unique keywords

      //I would append the keywords onto optiontags of a select
        let filterKeywords = ['keyword1','keyword2'];
        filterKeywords.forEach(keyword => {
          let optionTag = `<option value = "${keyword}">${keyword}</option>`;
          $('select').append(optionTag);
        })



 
}

const populateFilter = () => {
  let filterKeywords = [];

  // make an array of unique keywords
  allHorns.forEach(horn => {
    if(!filterKeywords.includes(horn.keyword)){
      filterKeywords.push(horn.keyword);
    }
  })

  // sort alphabetically
  filterKeywords.sort();

}

//event listener w/ annomynous function
const handleFilter = () => {
  $('select').on('change', function() {
    // find the value of the thing that was changed
    let selected = $(this).val();

    // as long as it wasn't the default;
    if (selected !== 'default'){
      $('div').hide();
      //fade in only the thing that was clicked on
      $(`div.${selected}`).fadeIn();
    }
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
