/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    let firstFeed,
        newFeed;
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //loops through each feed to ensure url defined and that the url is not empty.
        it('are URL defined', function() {
            for (i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        //loops through each feed to ensure name defined and that the name is not empty.
        it('are name defined', function() {
            for (i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    //test suite named "The menu" 
    describe('The menu', function() {
        
        //test that ensures the menu element is hiding/showing of the menu element.
        it('are menu element is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         //test the menu changes visibility when the menu icon is clicked
         it('When menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });


    //test suite named "Initial Entries"
    describe('Initial Entries', function() {

        //test the loadFeed function & result not empty
        beforeEach(function (done){
            loadFeed(0, done);
        });
        it('entry element', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);//fixed
        });
    });

    
    //test suite named "New Feed Selection"
    describe('New Feed Selection', function() {

        //test the new feed changes
        beforeEach(function (done){
            loadFeed(0, function(){
                firstFeed = $('.feed').html();
            });

            loadFeed(1, function(){
                newFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('new feed', function() {
            expect(firstFeed).not.toBe(newFeed);
        });
    });

}());
