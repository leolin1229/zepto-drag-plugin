zepto-drag-plugin
=================

### The drag plugin base on [Zepto](http://zeptojs.com/), it 's for mobile HTML5 Video progress bar.

### Usage

The structure of HTML like this:

```
<div class="x-progress-track" id="progressSlider">
  <div class="x-progress-load" style="width: 0%;"></div>
  <div class="x-progress-play" style="width: 0%;"></div>
  <div class="x-progress-seek" style="left: 0%;">
    <div class="x-seek-handle"></div>
  </div>
</div>
```

then:
```
$("#progressSlider").drag({
	videoObj: H5Player.player,
  handler: '.x-progress-seek',
  range: '.x-progress-play',
  maxLeft: 100,
 	maxRight: 100,	
 	callback1: function() {},
 	callback2: function() {},
 	callback3: function() {}
});
```