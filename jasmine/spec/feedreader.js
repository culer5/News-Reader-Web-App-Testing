/* feedreader.js
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('the URL defined and that the URL is not empty.', function () {
            allFeeds.forEach(function (entry) {
                expect(entry.url).toBeDefined();
                expect(entry.url.length).not.toBe(0);
            });
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('the name defined and that the name is not empty.', function () {
            allFeeds.forEach(function (entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name.length).not.toBe(0);
            });
        });
    });


    /*This is a new test suite named "The menu"*/

    /*Test #1 ensures the menu element is hidden by default.
     */

    describe('The menu', function () {
        var body = $('body');
        var hidden = $('menu-hidden');

        it('the menu element class is "hidden" by default.', function () {
            //expect(body.className).not.toContain("hidden");
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This is a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        var menuIcons = $('.menu-icon-link');

        it('when clicked hamburger menu changes class to "menu-hidden" and it changes when clicked again.', function () {
            menuIcons.click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            menuIcons.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /*This is a test suite named "Initial Entries"
     */
    /*This is a test that ensures when the loadFeed function is called and completes its work, there is at least
     *a single.entry element within the.feed container.
     */

    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('are populated by at least one element', function () {
              expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /*This is a new test suite named "New Feed Selection"
     */
    /*The test ensures when a new feed is loaded
     *by the loadFeed function that the content actually changes.
     */

    // Before each test, load the first feed and wait for it to finish.
    describe('New Feed Selection', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* Ensures when a new feed is loaded by the loadFeed function
        that the content actually changes.*/
        it('changes the content', function (done) {
            var initialContent = $('.feed').html();

            // Load the second feed...
            loadFeed(1, function () {
                // Has the content changed?
                expect($('.feed').html()).not.toEqual(initialContent);
                done();
            });
        });

    });
}());
