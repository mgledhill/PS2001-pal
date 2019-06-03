

/* PRACTICALSERIES (c) 2017

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          99-00-SCROLL.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   www.practicalseries.com

-------------------------------------------------------------------------------
DETAILS         LOCAL SCROLL FUNCTIONS

jQuery is using version 3.1.0 from the GoogleAPIs library.

This script applies the scroll to a point within the page (srollTop)
functionality for the current page.

-------------------------------------------------------------------------------
NAMING CONVENTIONS

Each <section> of the site has a waypoint (WP) reference number that identifies
the start of each section. These are id attributes and have the format:

        #js--ccssii

    where:  cc - chapter number
            ss - subsection number
            ii - inline section number

The six digit number is unique to each section, i.e. section 2.1.3
would have waypoint reference js--020103

The trigger class used in the <a> element to trigger the scroll to the waypoint
has the name .js-sc-000000 where the six digit number matches the waypoint
number of the section that is to be scrolled to.

The scrolltop function has an offset of -60px to ensure the title is visible
below the fixed navigation bar.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
23 Sep 2017   R01          M. Gledhill    First formal release

04 Jun 2017   P01          M. Gledhill    First published

03 Jun 2017   D01          M. Gledhill    Git styles scroll point added

27 May 2017   D00          M. Gledhill    Development - based on PS1001 P10
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No jQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                  /* START OF PAGE READY FUNCTION */

/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('#rev-scroll').append (
        "<p>D00.02a</p>" /* LOCAL JS REVISION NUMBER */
    );



/* ****************************************************************************
   SCROLL TO SECTION
   ****************************************************************************
   This holds several scrollTop functions that scroll from the TOC to the
   specified section. There is one click function per <a> within the TOC.
   ************************************************************************* */


 /* ---------------------------------------------------------------------------
   SCROLL TO TOP
   The offset is set to .to -80 - e.g.

          $('.js--sc-000000').click(function () {
           $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
          });
   ------------------------------------------------------------------------- */
   $('.js--sc-000000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });                                         /* END of scroll function */


 /* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

          $('.js--sc-nn0000').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0000').offset().top -10}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-990000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990000').offset().top -10}, 1000);
    });                                         /* END of scroll function */


  /* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

          $('.js--sc-nn0100').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0100').offset().top -20}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-010000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--010000').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-020000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--020000').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990100').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990100').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990101').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990101').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990200').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990200').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990300').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990300').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990400').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990400').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990500').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990500').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990600').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990600').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990700').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990700').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990800').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990800').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990900').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990900').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-991000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--991000').offset().top -20}, 1000);
    });                                         /* END of scroll function */


  /* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

          $('.js--sc-nn0101a').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-990101a').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990101a').offset().top -120}, 1000);
    });                                          /* END of scroll function */

    $('.js--sc-990101b').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--990101b').offset().top -140}, 1000);
    });                                          /* END of scroll function */


/* ---------------------------------------------------------------------------
   SCROLL TO -  CROSS REFERENCES
   For figures, the offset is set to .to -80 - e.g.

          $('.js--sc-fnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--fnn-01').offset().top -80}, 1000);
          });

   For tables, the offset is set to .to -60 - e.g.

          $('.js--sc-tnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--tnn-01').offset().top -60}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-f03-01').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--f03-01').offset().top -80}, 1000);
    });

    $('.js--sc-f03-02').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--f03-02').offset().top -80}, 1000);
    });

    $('.js--sc-f03-03').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--f03-03').offset().top -80}, 1000);
    });

    $('.js--sc-f03-05').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--f03-05').offset().top -80}, 1000);
    });

    $('.js--sc-t03-01').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--t03-01').offset().top -60}, 1000);
    });


/* ****************************************************************************
   NEXT SECTION (WAYPOINT FUNCTION)
   ****************************************************************************
   This function changes the next section srcoll point as each section
   passes the top of the screen
   ************************************************************************* */
    $('#js--010000').waypoint(function (direction) {
        if (direction == "down") {
            $('.next-01').addClass('nav-off').removeClass('nav-on');
            $('.next-02').addClass('nav-on').removeClass('nav-off');
        } else {
            $('.next-01').removeClass('nav-off').addClass('nav-on');
            $('.next-02').removeClass('nav-on').addClass('nav-off');
        }
    }, {
    offset: '100px'                                      /* check for waypoint 60px before top of screen */
    });                                                 /* END of Waypoint function */




/* ****************************************************************************
   IDENTIFY CURRENT TOC-EN SECTION
   ****************************************************************************
   Identifies the current toc-en from the position on the screen
   ************************************************************************* */


    findSection();

    $(window).scroll(function() {               /* call function on scroll */
        findSection();
    });



 /* ---------------------------------------------------------------------------
   FUNCTION DECLARATION -   findSection
   ---------------------------------------------------------------------------
   Identifies which instance of a section with the class .toc-en is currently
   at the top of the view port
   ------------------------------------------------------------------------- */
    function findSection() {

/*      ----------------------------------------------------------------------
        VARIABLES
        ----------------------------------------------------------------------
            vpHeight        Height of viewport (px)
            vpTop           Distance from top of page to top of viewport (px)
            secHeight       Height of current section (px)
            secTop          Distance from top of page to top of current section (px)
            nvHeight        Current height of navigation bar at top of page (px)

            secVisible      Is true if the current section is visible


        The section that is currently visible imediately below the nav bar
        is the active section.
        -------------------------------------------------------------------- */
        var secCount = $('.toc-en').length;                                     /* identify how many toc listed sections are present */
        var linkCount = $('.side-toc-lev').length;                              /* identify how many links are in the side toc */
        console.log("No. of toc-en(abled) sections "+secCount + " No. of side toc links " + linkCount)          /* Debug, output the two values derived above */

        var vpHeight = $(window).height();              /* get viewport height */
        var vpTop = $(window).scrollTop();                           /* position of top of viewport in document */
        var nvHeight =$('nav').height();                                        /* height of navigation bar */
        console.log("vpHeight "+vpHeight + " vpTop " + vpTop + " nvHeight " + nvHeight)                         /* Debug, output the two values derived above */

        /* proof of concept */
        /*var inst = 0;    */                                                       /* Proof of concept stuff */
        /*var instHeight = $(".toc-en:eq("+inst+")").offset().top;                 identify a property for a particular instance of a class (specified by inst in this case) */
        /*var fifthHeight = $(".toc-en:eq(5)").offset();
        console.log("instHeight " +instHeight + "   fifthHeight " + fifthHeight.top);  */
        /* $('.side-toc-lev').eq(3).addClass("toc-active"); */                  /* debug code, add .toc-active active class to 4th side toc link */




        var secTop;
        var secActiveVal = 0;
        var instTop;
        var instHeight;
        var instBottom;
        var i,j;                                                                  /* loop counter */
        for (i=secCount-1; i >= 0; i--) {


            j=i+1;
            instTop = $(".toc-en:eq("+i+")").offset().top;
            instHeight = $(".toc-en:eq("+i+")").height();

            if (i<(secCount-1)) {
                instBottom = $(".toc-en:eq("+ j +")").offset().top;
            } else {
                instBottom = instTop + instHeight;
            }

           console.log("i "+i+"   instTop "+instTop+"   instHeight "+instHeight+"   instBottom "+instBottom+"   vpTop "+vpTop+"   vpHeight "+vpHeight+"   nvHeight "+nvHeight);

             if (instTop <= (vpTop+nvHeight) && (instBottom)>(vpTop+nvHeight) ) {
                secActiveVal = i-1;
                console.log("secActiveVal "+secActiveVal);
            }

        }
        if (secActiveVal < 0){
            $('.side-toc-lev').removeClass("toc-active");
         } else {
            $('.side-toc-lev').removeClass("toc-active");
            $('.side-toc-lev').eq(secActiveVal).addClass("toc-active");
         }




    }
/* ************************************************************************* END OF findSection FUNCTION */



});                                             /* END OF PAGE READY FUNCTION */
