"use strict";
var axis_resolver_1 = require('./axis-resolver');
var core_1 = require('@angular/core');
describe('AxisResolver Class', function () {
    var makeMockElement = function () { return new core_1.ElementRef(document.createElement('div')); };
    var base_names = ['clientHeight', 'offsetHeight', 'scrollHeight'];
    it('should create an instance of AxisResolver', function () {
        var testResolver = new axis_resolver_1.AxisResolver();
        expect(testResolver).toEqual(jasmine.any(axis_resolver_1.AxisResolver));
    });
    it('should default constructor arg to true', function () {
        var defaultResolver = new axis_resolver_1.AxisResolver();
        var verticalResolver = new axis_resolver_1.AxisResolver(true);
        var results = defaultResolver.topKey();
        expect(results).toBe(verticalResolver.topKey());
    });
    it('should change topKey() to "left" if created "horizontal"', function () {
        var horizontalResolver = new axis_resolver_1.AxisResolver(false);
        expect(horizontalResolver.topKey()).toBe('left');
    });
    it('should make Height into Width if created "horizontal"', function () {
        var horizontalResolver = new axis_resolver_1.AxisResolver(false);
        var methodNames = base_names.map(function (name) { return name + 'Key'; });
        var results = methodNames.map(function (mName) { return horizontalResolver[mName](); });
        var are_widths = results.map(function (result) { return result.match(/Width/); });
        expect(are_widths.every(function (elt) { return elt; })).toBe(true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy1yZXNvbHZlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXhpcy1yZXNvbHZlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzdCLElBQU0sZUFBZSxHQUNuQixjQUFvQixNQUFNLENBQUMsSUFBSSxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUU3RSxJQUFNLFVBQVUsR0FBRyxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFcEUsRUFBRSxDQUFDLDJDQUEyQyxFQUFFO1FBQzlDLElBQU0sWUFBWSxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDO1FBRXhDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTtRQUMzQyxJQUFNLGVBQWUsR0FBSSxJQUFJLDRCQUFZLEVBQUUsQ0FBQztRQUM1QyxJQUFNLGdCQUFnQixHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxJQUFNLE9BQU8sR0FBWSxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFO1FBQzdELElBQU0sa0JBQWtCLEdBQUcsSUFBSSw0QkFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1REFBdUQsRUFBRTtRQUMxRCxJQUFNLGtCQUFrQixHQUFHLElBQUksNEJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFFLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxHQUFHLEtBQUssRUFBWixDQUFZLENBQUUsQ0FBQztRQUM3RCxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBM0IsQ0FBMkIsQ0FBRSxDQUFDO1FBQzFFLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFyQixDQUFxQixDQUFFLENBQUM7UUFFcEUsTUFBTSxDQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUUsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFFLENBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFzeW5jLFxuICBpbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGwgfSBmcm9tICcuL2luZmluaXRlLXNjcm9sbCc7XG5pbXBvcnQgeyBBeGlzUmVzb2x2ZXIgfSBmcm9tICcuL2F4aXMtcmVzb2x2ZXInO1xuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZXNjcmliZSgnQXhpc1Jlc29sdmVyIENsYXNzJywgKCkgPT4ge1xuICBjb25zdCBtYWtlTW9ja0VsZW1lbnQgPVxuICAgICgpOiBFbGVtZW50UmVmID0+IHsgcmV0dXJuIG5ldyBFbGVtZW50UmVmKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTt9O1xuXG4gIGNvbnN0IGJhc2VfbmFtZXMgPSBbJ2NsaWVudEhlaWdodCcsICdvZmZzZXRIZWlnaHQnLCAnc2Nyb2xsSGVpZ2h0J107XG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpc1Jlc29sdmVyJywgKCkgPT4ge1xuICAgIGNvbnN0IHRlc3RSZXNvbHZlciA9IG5ldyBBeGlzUmVzb2x2ZXIoKTtcblxuICAgIGV4cGVjdCh0ZXN0UmVzb2x2ZXIpLnRvRXF1YWwoamFzbWluZS5hbnkoQXhpc1Jlc29sdmVyKSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZGVmYXVsdCBjb25zdHJ1Y3RvciBhcmcgdG8gdHJ1ZScsICgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UmVzb2x2ZXIgID0gbmV3IEF4aXNSZXNvbHZlcigpO1xuICAgIGNvbnN0IHZlcnRpY2FsUmVzb2x2ZXIgPSBuZXcgQXhpc1Jlc29sdmVyKHRydWUpO1xuXG4gICAgY29uc3QgcmVzdWx0cyAgICAgICAgICA9IGRlZmF1bHRSZXNvbHZlci50b3BLZXkoKTtcblxuICAgIGV4cGVjdChyZXN1bHRzKS50b0JlKHZlcnRpY2FsUmVzb2x2ZXIudG9wS2V5KCkpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNoYW5nZSB0b3BLZXkoKSB0byBcImxlZnRcIiBpZiBjcmVhdGVkIFwiaG9yaXpvbnRhbFwiJywgKCkgPT4ge1xuICAgIGNvbnN0IGhvcml6b250YWxSZXNvbHZlciA9IG5ldyBBeGlzUmVzb2x2ZXIoZmFsc2UpO1xuXG4gICAgZXhwZWN0KGhvcml6b250YWxSZXNvbHZlci50b3BLZXkoKSkudG9CZSgnbGVmdCcpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG1ha2UgSGVpZ2h0IGludG8gV2lkdGggaWYgY3JlYXRlZCBcImhvcml6b250YWxcIicsICgpID0+IHtcbiAgICBjb25zdCBob3Jpem9udGFsUmVzb2x2ZXIgPSBuZXcgQXhpc1Jlc29sdmVyKGZhbHNlKTtcblxuICAgIGNvbnN0IG1ldGhvZE5hbWVzID0gYmFzZV9uYW1lcy5tYXAoIChuYW1lKSA9PiBuYW1lICsgJ0tleScgKTtcbiAgICBjb25zdCByZXN1bHRzID0gbWV0aG9kTmFtZXMubWFwKCAobU5hbWUpID0+IGhvcml6b250YWxSZXNvbHZlclttTmFtZV0oKSApO1xuICAgIGNvbnN0IGFyZV93aWR0aHMgPSByZXN1bHRzLm1hcCggKHJlc3VsdCkgPT4gcmVzdWx0Lm1hdGNoKC9XaWR0aC8pICk7XG5cbiAgICBleHBlY3QoIGFyZV93aWR0aHMuZXZlcnkoIChlbHQpID0+IGVsdCApICkudG9CZSh0cnVlKTtcbiAgfSk7XG5cbn0pXG4iXX0=