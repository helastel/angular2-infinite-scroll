"use strict";
var infinite_scroll_1 = require('./infinite-scroll');
var core_1 = require('@angular/core');
describe('Infinite Scroll Directive', function () {
    var createMockElement = function () {
        var mockedElement = new core_1.ElementRef(document.createElement('div'));
        return mockedElement;
    };
    it('should create an instance of the directive', function () {
        var mockedElement = createMockElement();
        var actual = new infinite_scroll_1.InfiniteScroll(mockedElement);
        expect(actual).toBeDefined();
    });
    it('should have default @Input properties values', function () {
        var mockedElement = createMockElement();
        var directive = new infinite_scroll_1.InfiniteScroll(mockedElement);
        var expectedInputs = [
            '_distanceDown',
            '_distanceUp',
            '_throttle',
            'scrollWindow',
            '_immediate'
        ];
        expectedInputs.forEach(function (actualInput) {
            return expect(directive[actualInput]).toBeDefined();
        });
    });
    it('should trigger the onScrollDown event when scroll has passed _distandDown', function () {
        var mockedElement = createMockElement();
        var directive = new infinite_scroll_1.InfiniteScroll(mockedElement);
        spyOn(directive, 'onScrollDown');
        directive.ngOnInit();
        spyOn(directive.scroller, 'calculatePoints').and.callFake(function () {
            return { height: 150, scrolledUntilNow: 75, totalToScroll: 150 };
        });
        directive.scroller.handler();
        expect(directive.scroller.calculatePoints).toHaveBeenCalled();
        expect(directive.onScrollDown).toHaveBeenCalled();
    });
    it('should trigger the onScrollUp event when scroll has passed _distanceUp', function () {
        var mockedElement = createMockElement();
        var directive = new infinite_scroll_1.InfiniteScroll(mockedElement);
        spyOn(directive, 'onScrollUp');
        directive.ngOnInit();
        spyOn(directive.scroller, 'calculatePoints').and.callFake(function () {
            return { height: 150, scrolledUntilNow: 30, totalToScroll: 150 };
        });
        directive.scroller.lastScrollPosition = 50;
        directive.scroller.handler();
        expect(directive.scroller.calculatePoints).toHaveBeenCalled();
        expect(directive.onScrollUp).toHaveBeenCalled();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZpbml0ZS1zY3JvbGwuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtJQUNwQyxJQUFNLGlCQUFpQixHQUFHO1FBQ3hCLElBQU0sYUFBYSxHQUFlLElBQUksaUJBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEYsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFRixFQUFFLENBQUMsNENBQTRDLEVBQUU7UUFDL0MsSUFBTSxhQUFhLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGdDQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhDQUE4QyxFQUFFO1FBQ2pELElBQU0sYUFBYSxHQUFHLGlCQUFpQixFQUFFLENBQUM7UUFDMUMsSUFBTSxTQUFTLEdBQUcsSUFBSSxnQ0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELElBQU0sY0FBYyxHQUFHO1lBQ3JCLGVBQWU7WUFDZixhQUFhO1lBQ2IsV0FBVztZQUNYLGNBQWM7WUFDZCxZQUFZO1NBQ2IsQ0FBQztRQUNGLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQSxXQUFXO1lBQ2hDLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtRQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkVBQTJFLEVBQUU7UUFDOUUsSUFBTSxhQUFhLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQyxJQUFNLFNBQVMsR0FBRyxJQUFJLGdDQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEQsS0FBSyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNqQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5RCxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0VBQXdFLEVBQUU7UUFDM0UsSUFBTSxhQUFhLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQyxJQUFNLFNBQVMsR0FBRyxJQUFJLGdDQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEQsS0FBSyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMvQixTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5RCxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFzeW5jLFxuICBpbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsIH0gZnJvbSAnLi9pbmZpbml0ZS1zY3JvbGwnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZXNjcmliZSgnSW5maW5pdGUgU2Nyb2xsIERpcmVjdGl2ZScsICgpID0+IHtcbiAgY29uc3QgY3JlYXRlTW9ja0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9ja2VkRWxlbWVudDogRWxlbWVudFJlZiA9IG5ldyBFbGVtZW50UmVmKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICByZXR1cm4gbW9ja2VkRWxlbWVudDtcbiAgfTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgZGlyZWN0aXZlJywgKCkgPT4ge1xuICAgIGNvbnN0IG1vY2tlZEVsZW1lbnQgPSBjcmVhdGVNb2NrRWxlbWVudCgpO1xuICAgIGNvbnN0IGFjdHVhbCA9IG5ldyBJbmZpbml0ZVNjcm9sbChtb2NrZWRFbGVtZW50KTtcbiAgICBleHBlY3QoYWN0dWFsKS50b0JlRGVmaW5lZCgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGhhdmUgZGVmYXVsdCBASW5wdXQgcHJvcGVydGllcyB2YWx1ZXMnLCAoKSA9PiB7XG4gICAgY29uc3QgbW9ja2VkRWxlbWVudCA9IGNyZWF0ZU1vY2tFbGVtZW50KCk7XG4gICAgY29uc3QgZGlyZWN0aXZlID0gbmV3IEluZmluaXRlU2Nyb2xsKG1vY2tlZEVsZW1lbnQpO1xuICAgIGNvbnN0IGV4cGVjdGVkSW5wdXRzID0gW1xuICAgICAgJ19kaXN0YW5jZURvd24nLFxuICAgICAgJ19kaXN0YW5jZVVwJyxcbiAgICAgICdfdGhyb3R0bGUnLFxuICAgICAgJ3Njcm9sbFdpbmRvdycsXG4gICAgICAnX2ltbWVkaWF0ZSdcbiAgICBdO1xuICAgIGV4cGVjdGVkSW5wdXRzLmZvckVhY2goYWN0dWFsSW5wdXQgPT5cbiAgICAgIGV4cGVjdChkaXJlY3RpdmVbYWN0dWFsSW5wdXRdKS50b0JlRGVmaW5lZCgpKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCB0cmlnZ2VyIHRoZSBvblNjcm9sbERvd24gZXZlbnQgd2hlbiBzY3JvbGwgaGFzIHBhc3NlZCBfZGlzdGFuZERvd24nLCAoKSA9PiB7XG4gICAgY29uc3QgbW9ja2VkRWxlbWVudCA9IGNyZWF0ZU1vY2tFbGVtZW50KCk7XG4gICAgY29uc3QgZGlyZWN0aXZlID0gbmV3IEluZmluaXRlU2Nyb2xsKG1vY2tlZEVsZW1lbnQpO1xuICAgIHNweU9uKGRpcmVjdGl2ZSwgJ29uU2Nyb2xsRG93bicpO1xuICAgIGRpcmVjdGl2ZS5uZ09uSW5pdCgpO1xuICAgIHNweU9uKGRpcmVjdGl2ZS5zY3JvbGxlciwgJ2NhbGN1bGF0ZVBvaW50cycpLmFuZC5jYWxsRmFrZSgoKSA9PiB7XG4gICAgICByZXR1cm4geyBoZWlnaHQ6IDE1MCwgc2Nyb2xsZWRVbnRpbE5vdzogNzUsIHRvdGFsVG9TY3JvbGw6IDE1MCB9O1xuICAgIH0pO1xuICAgIGRpcmVjdGl2ZS5zY3JvbGxlci5oYW5kbGVyKCk7XG4gICAgZXhwZWN0KGRpcmVjdGl2ZS5zY3JvbGxlci5jYWxjdWxhdGVQb2ludHMpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICBleHBlY3QoZGlyZWN0aXZlLm9uU2Nyb2xsRG93bikudG9IYXZlQmVlbkNhbGxlZCgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHRyaWdnZXIgdGhlIG9uU2Nyb2xsVXAgZXZlbnQgd2hlbiBzY3JvbGwgaGFzIHBhc3NlZCBfZGlzdGFuY2VVcCcsICgpID0+IHtcbiAgICBjb25zdCBtb2NrZWRFbGVtZW50ID0gY3JlYXRlTW9ja0VsZW1lbnQoKTtcbiAgICBjb25zdCBkaXJlY3RpdmUgPSBuZXcgSW5maW5pdGVTY3JvbGwobW9ja2VkRWxlbWVudCk7XG4gICAgc3B5T24oZGlyZWN0aXZlLCAnb25TY3JvbGxVcCcpO1xuICAgIGRpcmVjdGl2ZS5uZ09uSW5pdCgpO1xuICAgIHNweU9uKGRpcmVjdGl2ZS5zY3JvbGxlciwgJ2NhbGN1bGF0ZVBvaW50cycpLmFuZC5jYWxsRmFrZSgoKSA9PiB7XG4gICAgICByZXR1cm4geyBoZWlnaHQ6IDE1MCwgc2Nyb2xsZWRVbnRpbE5vdzogMzAsIHRvdGFsVG9TY3JvbGw6IDE1MCB9O1xuICAgIH0pO1xuICAgIGRpcmVjdGl2ZS5zY3JvbGxlci5sYXN0U2Nyb2xsUG9zaXRpb24gPSA1MDtcbiAgICBkaXJlY3RpdmUuc2Nyb2xsZXIuaGFuZGxlcigpO1xuICAgIGV4cGVjdChkaXJlY3RpdmUuc2Nyb2xsZXIuY2FsY3VsYXRlUG9pbnRzKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgZXhwZWN0KGRpcmVjdGl2ZS5vblNjcm9sbFVwKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gIH0pO1xufSlcbiJdfQ==