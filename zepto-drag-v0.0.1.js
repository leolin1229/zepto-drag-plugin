/*======================= 自定义H5播放器进度条拖拉插件 BEGIN =======================*/
/**
 * <div class="x-progress-track" id="progressSlider">
 *   <div class="x-progress-load" style="width: 0%;"></div>
 *   <div class="x-progress-play" style="width: 0%;"></div>
 *   <div class="x-progress-seek" style="left: 0%;">
 *     <div class="x-seek-handle"></div>
 *   </div>
 * </div>
 */
;(function ($) {
  $.fn.drag = function(options, callback) {
    var defaults = {
      videoObj: null, // 播放器对象
      handler: null, // 拖拉点 .x-seek-handle
      range: null, // 已播放状态条 .x-progress-seek
      maxLeft: 0, // 状态条最左边位置
      maxRight: 0, // 状态条最右边位置
      callback1: null, // touchstart回调函数
      callback2: null, // touchmove回调函数
      callback3: null //touchend回调函数
    };
    var self = $(this);

    var target = null;

    var opts = $.extend(defaults, options);

    self.on('touchstart', opts.handler, function(e) {
      target = $(e.target);
      $(opts.videoObj).off('timeupdate');
      if(typeof opts.callback1 === 'function') {
        opts.callback1.call(this);
      }
    });

    self.on('touchmove', function(e) {
      e.preventDefault();
      if(target) {
        if(e.touches[0].pageX >= opts.maxLeft && e.touches[0].pageX + $(target).width() <= opts.maxRight) {
          $(opts.handler).css({
            left: (e.touches[0].pageX - opts.maxLeft) + 'px'
          });
          var percent = (e.touches[0].pageX - opts.maxLeft) / self.width();
          opts.videoObj.currentTime = Math.round(opts.videoObj.duration * percent);
          $(opts.range).css('width', (percent * 100) + "%");
        }

        if(typeof opts.callback2 === 'function') {
          opts.callback2.call(this);
        }
      }
    });

    self.on('touchend', function(e) {
      e.preventDefault();
      target = null;
      if(typeof opts.callback3 === 'function') {
        opts.callback3.call(this);
      }
    });
  }
}(Zepto));
/*======================= 自定义H5播放器进度条拖拉插件 BEGIN =======================*/