'use strict'; 
var pw = angular.module('patternWarehouse', ['ngAnimate']);
pw.controller('patternController', function($scope){
    
    $scope.loadItem = function(e){
        $('.sample').css('background', 'url('+e.item.image.toString()+')');
         $('.sample').fadeIn();
    }
    
    $('.image-item').on('click', function(){
        $('.sample').css('background', 'url('+$(this).attr('ng-src')+')');
         $('.sample').fadeIn();
        });
    
     $('.close-btn').on('click', function(){
        $('.sample').css('background', '#FFF');
         $('.sample').fadeOut();
        });
 
    
    $scope.collection = [{
       image: '../assets/collection/01.jpg',
       keywords: 'floral,topinambur,yellow,flower'
       },
        {
       image: '../assets/collection/02.jpg',
       keywords: 'floral,flower,blue'
        },
        {
       image: '../assets/collection/05.jpg',
       keywords: 'colash,geometric,swim,orange,blue'
        },
        {
       image: '../assets/collection/06.jpg',
       keywords: 'floral,flower,pink'
        },
        {
       image: '../assets/collection/07.jpg',
       keywords: 'colash,geometric,swim,orange,blue'
        },
        {
       image: '../assets/collection/08.jpg',
       keywords: 'Nature,fruit,pinapple,'
        },
        {
       image: '../assets/collection/09.jpg',
       keywords: 'Japanese,colorfull'
        },
        {
       image: '../assets/collection/012.jpg',
       keywords: 'floral,flower,pink,red'
        },
        {
       image: '../assets/collection/013.jpg',
       keywords: 'geometric,lines,yellow,blue,green'
        },
        {
       image: '../assets/collection/014.jpg',
       keywords: 'colash,spider,writing,words,orange,black'
        },
        {
       image: '../assets/collection/015.jpg',
       keywords: 'indian,colorfull'
        },
        {
       image: '../assets/collection/017.jpg',
       keywords: 'Japanese,flowes,nature,leaves'
        },
        {
       image: '../assets/collection/021.jpg',
       keywords: 'colash,writing,words,black,bird'
        },
        {
       image: '../assets/collection/022.jpg',
       keywords: 'nature,leaf,ladybug,insect,flowers,animals'
        },
        {
       image: '../assets/collection/023.jpg',
       keywords: 'mexican,skull,floral,colorfull'
        },
        {
       image: '../assets/collection/024.jpg',
       keywords: 'nature,flowers,pink,green'
        },
        {
       image: '../assets/collection/025.jpg',
       keywords: 'geometric,color'
        },
        {
       image: '../assets/collection/028.jpg',
       keywords: 'Nature,watermelon,green'
        },
        {
       image: '../assets/collection/030.jpg',
       keywords: 'Colash,bird,nature'
        },
        {
       image: '../assets/collection/031.jpg',
       keywords: 'japanese,flowers,green,red'
        },
        {
       image: '../assets/collection/033.jpg',
       keywords: 'nature,floral,flowers,blue'
        },
        {
       image: '../assets/collection/034.jpg',
       keywords: 'nature,floral,flowers,colorful'
        },
        {
       image: '../assets/collection/035.jpg',
       keywords: 'nature,floral, flowers'
        },
        {
       image: '../assets/collection/038.jpg',
       keywords: 'Geometric,lines,blue'
        },
        {
       image: '../assets/collection/040.jpg',
       keywords: 'geometric,curves,pink'
        },
        {
       image: '../assets/collection/043.jpg',
       keywords: 'geometric,black,flowers'
        },
        {
       image: '../assets/collection/044.jpg',
       keywords: 'geometric,black,circles'
        },
        {
       image: '../assets/collection/045.jpg',
       keywords: 'geometric,circles,colorfull'
        },
        {
       image: '../assets/collection/046.jpg',
       keywords: 'geometric,black'
        },
        {
       image: '../assets/collection/047.jpg',
       keywords: 'geometric,black'
        },
        {
       image: '../assets/collection/048.jpg',
       keywords: 'geometric,black'
        },
        {
       image: '../assets/collection/050.jpg',
       keywords: 'Geometric,triangles,dots,blue,red,pink'
        },
        {
       image: '../assets/collection/051.jpg',
       keywords: 'geometric,green'
        },
        {
       image: '../assets/collection/052.jpg',
       keywords: 'geometric,eagle,triangle'
        },
        {
       image: '../assets/collection/053.jpg',
       keywords: 'indian,purple'
        },
        {
       image: '../assets/collection/055.jpg',
       keywords: 'indian,gold,red'
        },
        {
       image: '../assets/collection/056.jpg',
       keywords: 'indian,red'
        },
        {
       image: '../assets/collection/057.jpg',
       keywords: 'indian,red,purple,pink'
        }             
    ];
   
});


if(!Modernizr.svg) {
    $('#logo').attr('src','../assets/images/pattern-warehouse-logo.png');
}