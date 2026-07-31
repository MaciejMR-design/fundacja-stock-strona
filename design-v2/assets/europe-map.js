/* Interactive "Stock in Europe" map (contact page).
   Land paths auto-generated from Natural Earth data (Mercator, lon -12..30.5, lat 40.8..58.6).
   Markers = Stock factories & representative offices. No subpages, no addresses —
   click / hover / keyboard shows an elegant city tooltip. */

const EU_MAP = {
  w: 1000, h: 658,
  project: function (lat, lon) {
    var rad = Math.PI / 180, R = 1348.1359885431134;
    var mercTop = 1.2690898995519835;
    return {
      x: (lon - (-12)) * rad * R,
      y: (mercTop - Math.log(Math.tan(Math.PI / 4 + (lat * rad) / 2))) * R
    };
  },
  base: 'M766.8 624.6L763.8 635.3L767.2 648.8L776.9 656.4L776.5 664.5L773.9 666L737.8 666L736.9 659.9L738.9 638.6L742.1 628.9L738.2 623.9L736.6 613.8L746.8 598.1L748.3 604.1L754.6 601.3L759.6 609.9L765.2 613.1L766.8 624.6ZM681.9 415.8L680.1 430.1L666.8 430.2L671.4 437.7L663.6 460L659.1 465.8L638.5 466.7L626.6 474.4L607.2 471.8L573.6 462.9L568.3 451L545.1 457L542.3 463.5L528.1 458.6L516.1 457.7L505.4 451.4L509 442.9L508.1 436.7L515.2 434.8L527.1 444.5L530.5 435.3L551.2 436.8L568 430.5L579.3 431.6L586.7 438.7L588.8 432.8L585.5 409.9L594 405.4L602.3 389L619.7 400.5L633 385.9L641.3 383.2L659.5 394.1L670.6 392.3L681.4 399L679.5 403.5L681.9 415.8ZM360.4 298.4L377.6 301.4L399.4 293.5L414.3 310L427.2 318.7L424.5 343.7L418.4 345.1L415.9 365.5L395.3 348.9L383.2 351.8L366.8 334.4L355.8 319.6L344.9 319L341.5 305.8L360.4 298.4ZM815.5 548L822.2 561.4L831.3 559.1L849.4 564.1L884 565.8L895.7 557.5L923.4 549.9L940.5 561.8L954.3 565.2L942.1 578.7L933.5 601.7L941.1 619.8L920.8 615.6L896.9 625.5L896.6 641.2L875.2 644.1L858.7 633.2L839.8 641.8L822.4 640.9L820.7 620.1L809 609.9L812.8 605.4L810.3 601.6L814.2 591.4L823.2 581.3L811.8 567.3L809.7 555.4L815.5 548ZM729.5 527.3L738.1 527.2L732.2 541.8L743.5 554.4L740.1 569.8L734.6 571.2L722.5 581.7L719.1 599.4L698.2 587.2L689.3 573.7L680.4 566.5L669.6 554.3L664.5 544.2L652.9 528.7L657.9 514.9L666.3 522.6L671.4 515.6L682.4 514.9L702.6 520.4L718.9 520L729.5 527.3ZM834.9 198.9L857.7 199.1L883.2 184L888.7 161.1L908 148L905.7 129.4L920.1 122.4L945.3 106.2L970.1 116.7L973.4 127.1L985.8 122.1L1008 131.7L1008 158.3L1006.1 162.5L1008 166L1008 274.3L1002.8 280.3L1001.3 299.4L991.9 295.7L970.7 297.6L964.5 288.7L955.7 295.3L946.9 289.8L928.3 289.1L902.1 280L878.3 277L860.1 277.8L847.2 288.1L835.9 289.6L835.5 272.7L828.2 254.9L842.3 247L842.5 231.4L835.9 216.4L834.9 198.9ZM508.1 436.7L509 442.9L505.4 451.4L516.1 457.7L528.1 458.6L526.2 472.7L515.8 478.4L498.4 474.2L493.3 487.9L482.1 488.9L478 483.6L464.8 495.1L453.5 496.7L443.4 489.4L435.3 474.5L424.1 479.9L424.4 464.4L441.6 445L440.9 436.2L451.6 439.4L458 433.4L478.1 433.6L482.9 426L508.1 436.7ZM580.9 129.6L566.8 163L542.2 139.8L538.9 122.5L573.4 108.6L580.9 129.6ZM539.1 93.9L533.4 109.9L526.4 105.3L509.4 135.4L515.8 155.5L500.8 161.8L483 156.4L473.4 133.5L472.7 90.4L476.6 78.9L483.4 65.9L504.1 63.2L512.4 51.2L531.3 38.8L530.5 61.3L523.5 75.4L526.4 87.4L539.1 93.9ZM69.8 623.8L71 601.2L61.3 587.3L94.6 563.9L123.4 569.8L155 569.6L180.1 575.1L199.6 573.4L237.6 574.5L247 587L290.3 601.6L298.9 594.7L325.3 609.1L352.6 605L353.9 623.5L331.6 644.4L301.4 651L299.3 661.5L295.5 666L120.9 666L121.1 648L132 639.5L125.4 623.7L111.7 622.6L107.7 626.6L93.8 626.6L87.9 611.1L78.3 615.8L69.8 623.8ZM854.4 36L857.2 9.8L848.5 15.4L833.6 -0.6L833 -8L929 -8L927.5 -5.6L934.5 36.1L924.4 50L905 49.9L884.8 33.6L874.5 28.2L854.4 36ZM908.3 633.9L901 653.4L895.5 656.9L881.1 656L868.8 653.1L840.3 661.2L844.9 666L773.9 666L776.5 664.5L776.9 656.4L792.3 653.6L801.3 646.8L814.1 647.4L817.9 641.9L822.4 640.9L839.8 641.8L858.7 633.2L875.2 644.1L896.6 641.2L896.9 625.5L908.3 633.9ZM663.6 460L671.4 437.7L666.8 430.2L680.1 430.1L681.9 415.8L693.8 424.8L702.5 428.6L722.3 424.3L724.2 417.2L733.5 416.2L745 410.7L747.5 413L758.6 408.6L764.1 400.2L771.8 398L797 408.8L802 405.2L815.1 414.8L816.7 424.2L802.3 431.6L791.2 455.1L777 478.4L758.1 484.8L743.4 483.3L716.6 497.3L697.2 490.8L679.6 476.2L672.1 472L667.5 460.4L663.6 460ZM136.5 200.7L140.4 228.9L122.6 263.6L80.9 286.2L47.6 280.4L66.7 240.2L54.4 200.1L86.4 168.5L104.2 149.4L109 171.3L104.2 193L118.7 192.4L136.5 200.7ZM770.9 618.4L769.8 624.9L766.8 624.6L765.2 613.1L759.6 609.9L754.6 601.3L759 594.1L764.6 591.8L767.9 581.1L772.1 579.4L775.4 583.9L779.8 585.9L782.9 591L786.8 592.5L791.4 598.5L794.7 598.3L792.1 606.1L789.3 609.9L790 612.3L770.9 618.4ZM817.2 182.2L815.3 171.9L817.8 160.7L807.4 154.2L782.8 147L777.8 112L804.7 99L844.2 101.7L867.3 97.5L870.6 106.4L883.1 109.1L905.7 129.4L908 148L888.7 161.1L883.2 184L857.7 199.1L834.9 198.9L829.3 186.5L817.2 182.2ZM424.5 343.7L429.2 351.9L427.9 367.9L421.1 368.7L415.9 365.5L418.4 345.1L424.5 343.7ZM777.8 112L778.6 80L790.2 52.8L812.3 37.8L831 70.4L849.9 69.6L854.4 36L874.5 28.2L884.8 33.6L905 49.9L924.4 50L935.8 60.1L937.8 81L945.3 106.2L920.1 122.4L905.7 129.4L883.1 109.1L870.6 106.4L867.3 97.5L844.2 101.7L804.7 99L777.8 112ZM908.7 412.3L914.3 407.1L929.9 403.6L947.3 414.6L957 416L967.6 425.4L965.9 437.3L974.5 442.9L977.9 457.4L986.1 466.1L984.4 471.2L988.8 474.7L982.6 477.2L968.7 476.2L966.4 471.5L961.5 474.2L963.1 480.3L956.7 491.2L952.6 502.7L946.7 506.4L942.5 491L944.9 476.5L944.2 461.5L930.6 440.9L923.1 426.2L915.9 415.8L908.7 412.3ZM766.8 624.6L769.8 624.9L770.9 618.4L798 610.4L809 609.9L820.7 620.1L822.4 640.9L817.9 641.9L814.1 647.4L801.3 646.8L792.3 653.6L776.9 656.4L767.2 648.8L763.8 635.3L766.8 624.6ZM748.3 604.1L746.8 598.1L736.6 613.8L738.2 623.9L733.2 621.5L726.6 611.1L716.5 604.8L719.1 599.4L722.5 581.7L734.6 571.2L744.2 581.2L752 584.7L760.9 591.4L754.6 601.3L748.3 604.1ZM425.3 214.8L444.8 216L449.2 229.3L443.4 264.8L437.4 279.2L423.3 279.2L427.2 318.7L414.3 310L399.4 293.5L377.6 301.4L360.4 298.4L372.5 288L393.1 231.3L425.3 214.8ZM498 -8L479.6 12.9L448.2 23.4L415.7 0.5L414.2 -8ZM69.8 623.8L78.3 615.8L87.9 611.1L93.8 626.6L107.7 626.6L111.7 622.6L125.4 623.7L132 639.5L121.1 648L120.9 666L74.2 666L76 658.9L75.5 645.7L70.8 634.4L69.8 623.8ZM816.7 424.2L826.9 416.7L841.4 420.6L856.5 420.7L867.4 429.3L875.5 423.9L892.8 420.6L898.8 412.3L908.7 412.3L915.9 415.8L923.1 426.2L930.6 440.9L944.2 461.5L944.9 476.5L942.5 491L946.7 506.4L957.2 512.6L968.2 507.2L978.9 512.9L979.4 521.5L968 528.7L960.9 525.6L954.3 565.2L940.5 561.8L923.4 549.9L895.7 557.5L884 565.8L849.4 564.1L831.3 559.1L822.2 561.4L811.2 542.3L816.6 536.7L810.8 532.6L803.4 540L789.7 530.4L787.8 516.7L773.5 508.8L770.9 498.1L758.1 484.8L777 478.4L791.2 455.1L802.3 431.6L816.7 424.2ZM817.2 182.2L773.9 182.8L745 178.2L750.3 160.3L782.8 147L807.4 154.2L817.8 160.7L815.3 171.9L817.2 182.2ZM1008 -8L1008 166L1006.1 162.5L1008 158.3L1008 131.7L985.8 122.1L973.4 127.1L970.1 116.7L945.3 106.2L937.8 81L935.8 60.1L924.4 50L934.5 36.1L927.5 -5.6L929 -8ZM773.5 508.8L787.8 516.7L789.7 530.4L803.4 540L810.8 532.6L816.6 536.7L811.2 542.3L815.5 548L809.7 555.4L811.8 567.3L823.2 581.3L814.2 591.4L810.3 601.6L812.8 605.4L809 609.9L790 612.3L789.3 609.9L792.1 606.1L794.7 598.3L791.4 598.5L786.8 592.5L782.9 591L779.8 585.9L775.4 583.9L772.1 579.4L767.9 581.1L764.6 591.8L759 594.1L760.9 591.4L752 584.7L744.2 581.2L734.6 571.2L740.1 569.8L743.5 554.4L732.2 541.8L738.1 527.2L729.5 527.3L738.6 514.8L731.1 505.3L725.4 492.2L743.4 483.3L758.1 484.8L770.9 498.1L773.5 508.8ZM607.2 471.8L626.6 474.4L638.5 466.7L659.1 465.8L663.6 460L667.5 460.4L672.1 472L653.4 481L651.1 494.7L642.9 498.2L643 507.6L633.8 506.9L625.8 501.4L621.5 507.1L605.1 506L610.3 502.9L604.7 488.6L607.2 471.8ZM684.3 -8L678.3 -5.4L669.4 68.9L656 108.9L627.5 104.8L614.1 138L586.9 139.9L579.4 100.3L559.7 51.5L542.8 -8ZM683.8 53.9L687.3 56.5L668.9 105.7L667.4 89.7L683.8 53.9ZM737.8 28.7L724.8 42.3L725.3 51.3L729.3 51.5L728.3 54.6L722.2 57.4L722.6 61.8L716.8 65.2L713.4 73.8L708.4 75.4L710.3 65.9L707.6 59.1L709.5 53.5L708.1 46.9L721.4 30L730.3 29.5L731.9 27.2L738.2 27L737.8 28.7ZM1008 666L961.4 666L970.4 644.6L1008 648.1ZM922.2 661.1L916.4 666L896.5 666L895.1 663.3L895.5 656.9L901 653.4L908.3 633.9L896.9 625.5L920.8 615.6L941.1 619.8L943.9 631.9L964.4 642.1L960.2 649.7L932.2 651.5L922.2 661.1ZM1008 468.9L1005.9 469.3L997.1 488L978.9 512.9L968.2 507.2L957.2 512.6L946.7 506.4L952.6 502.7L956.7 491.2L963.1 480.3L961.5 474.2L966.4 471.5L968.7 476.2L982.6 477.2L988.8 474.7L984.4 471.2L986.1 466.1L977.9 457.4L974.5 442.9L965.9 437.3L967.6 425.4L957 416L947.3 414.6L929.9 403.6L914.3 407.1L908.7 412.3L898.8 412.3L892.8 420.6L875.5 423.9L867.4 429.3L856.5 420.7L841.4 420.6L826.9 416.7L816.7 424.2L815.1 414.8L802 405.2L806.6 390.9L813.1 381.5L818.3 383.6L812.2 367.4L833.6 337L845.2 332.7L847.8 322.4L835.9 289.6L847.2 288.1L860.1 277.8L878.3 277L902.1 280L928.3 289.1L946.9 289.8L955.7 295.3L964.5 288.7L970.7 297.6L991.9 295.7L1001.3 299.4L1002.8 280.3L1008 274.3Z',
  active: 'M681.4 399L670.6 392.3L659.5 394.1L641.3 383.2L633 385.9L619.7 400.5L602.3 389L589 373.6L577 364.9L574.5 349.5L570.4 338.6L587.5 330.6L596.2 321.3L613.1 314.1L619 307L625.2 311.3L635.7 307.4L646.8 319.4L664.4 322.6L663 332.8L675.8 340.5L679.3 330.9L695.4 335.1L697.6 346.6L715.1 348.8L726 366.7L718.9 366.8L715.3 373.3L709.9 374.8L708.4 383L703.8 384.7L703.2 388.1L695.2 391.8L684.8 391.2L681.4 399ZM515.8 155.5L516.2 171.3L540 180.7L539.8 195L563.7 187.5L576.9 176.4L603.5 192.3L614.6 205.1L620.1 225.2L613.5 235.7L622.1 249.5L627.9 270.1L626 283.3L635.7 307.4L625.2 311.3L619 307L613.1 314.1L596.2 321.3L587.5 330.6L570.4 338.6L574.5 349.5L577 364.9L589 373.6L602.3 389L594 405.4L585.5 409.9L588.8 432.8L586.7 438.7L579.3 431.6L568 430.5L551.2 436.8L530.5 435.3L527.1 444.5L515.2 434.8L508.1 436.7L482.9 426L478.1 433.6L458 433.4L461 408.4L472.9 384L439 377.3L427.9 367.9L429.2 351.9L424.5 343.7L427.2 318.7L423.3 279.2L437.4 279.2L443.4 264.8L449.2 229.3L444.8 216L449.4 207.6L469.1 205.4L473.5 214.2L489.4 194.5L484 179.4L483 156.4L500.8 161.8L515.8 155.5ZM507.3 615.2L499.5 639.6L488.8 633.2L483.4 611.9L488.1 600.1L503.3 587.8L507.3 615.2ZM366.8 334.4L383.2 351.8L395.3 348.9L415.9 365.5L421.1 368.7L427.9 367.9L439 377.3L472.9 384L461 408.4L458 433.4L451.6 439.4L440.9 436.2L441.6 445L424.4 464.4L424.1 479.9L435.3 474.5L443.4 489.4L442.4 499L449.3 511.6L441.2 521.7L447.2 547.3L460 551.5L457.3 565.7L436 584L389.6 575.2L355.3 585.7L352.6 605L325.3 609.1L298.9 594.7L290.3 601.6L247 587L237.6 574.5L249.8 554.9L254.3 488.6L230 452.7L212.6 435.2L176.7 421.7L174.3 395.9L204.8 388.1L244.3 397.3L236.9 356.5L259.1 372.1L313.9 343.7L320.9 313.4L341.5 305.8L344.9 319L355.8 319.6L366.8 334.4ZM149.1 173L136.5 200.7L118.7 192.4L104.2 193L109 171.3L104.2 149.4L123.9 147.7L149.1 173ZM211.6 -1.6L186.5 46.6L210.5 40.6L236.3 40.8L230.1 76.3L209 114.4L233.3 117.1L256.1 170.2L272.2 176.7L286.7 222.2L293.4 237.7L321.9 245.1L319.1 269.7L307.1 280.9L316.5 300.5L295.3 320.1L263.8 319.8L223.8 330L212.8 322.7L197.2 340L175.5 335.8L158.9 349.8L146.4 342.5L180.9 303.5L201.8 295.3L165.1 289L158.4 273.9L183 262L170.1 241.2L174.6 215.5L209.6 219L213.1 196L197.3 171.1L168.4 163.4L162.8 152.3L171.3 133.8L163.6 122.4L150.9 142L149.5 101.7L137.6 79.9L146.2 34.9L164.5 -1.4L183.3 2.2L211.6 -1.6ZM725.4 492.2L731.1 505.3L738.6 514.8L729.5 527.3L718.9 520L702.6 520.4L682.4 514.9L671.4 515.6L666.3 522.6L657.9 514.9L652.9 528.7L664.5 544.2L669.6 554.3L680.4 566.5L689.3 573.7L698.2 587.2L719.1 599.4L716.5 604.8L694.4 592.9L680.7 581.4L659.2 571.7L639.4 547.7L644.1 545.3L633.4 531.4L633 520.2L617.9 514.9L610.6 529.3L603.7 518.1L605.1 506L621.5 507.1L625.8 501.4L633.8 506.9L643 507.6L642.9 498.2L651.1 494.7L653.4 481L672.1 472L679.6 476.2L697.2 490.8L716.6 497.3L725.4 492.2ZM499.1 644.9L512.5 666L478.3 666L474.4 653L487.3 654.6L499.1 644.9ZM573.6 462.9L607.2 471.8L604.7 488.6L610.3 502.9L591.6 498L572.4 509.9L573.7 526.5L570.9 535.9L578.6 552.7L600.6 569.1L612.5 595.8L638.6 621.5L657.1 621.3L662.8 628.2L656.2 634.5L694.6 655.3L707.9 666L629.5 666L628.3 663.7L613.2 658.1L603 645.6L585.6 643.5L567.2 629.4L545.7 608.8L529.7 590.3L522.4 558.3L510.6 554.5L491.5 543.7L480.7 548.1L467.1 563.3L457.3 565.7L460 551.5L447.2 547.3L441.2 521.7L449.3 511.6L442.4 499L443.4 489.4L453.5 496.7L464.8 495.1L478 483.6L482.1 488.9L493.3 487.9L498.4 474.2L515.8 478.4L526.2 472.7L528.1 458.6L542.3 463.5L545.1 457L568.3 451L573.6 462.9ZM635.7 307.4L626 283.3L627.9 270.1L622.1 249.5L613.5 235.7L620.1 225.2L614.6 205.1L630.7 193.3L667.4 174.7L697 160.9L720.5 167.8L722.3 177.7L745 178.2L773.9 182.8L817.2 182.2L829.3 186.5L834.9 198.9L835.9 216.4L842.5 231.4L842.3 247L828.2 254.9L835.5 272.7L835.9 289.6L847.8 322.4L845.2 332.7L833.6 337L812.2 367.4L818.3 383.6L790.8 367.7L773.8 372.8L762.7 369.1L748.8 376.8L737 364L727.3 368.9L715.1 348.8L697.6 346.6L695.4 335.1L679.3 330.9L675.8 340.5L663 332.8L664.4 322.6L646.8 319.4L635.7 307.4ZM726 366.7L727.3 368.9L737 364L748.8 376.8L762.7 369.1L773.8 372.8L790.8 367.7L813.1 381.5L806.6 390.9L802 405.2L797 408.8L771.8 398L764.1 400.2L758.6 408.6L747.5 413L745 410.7L733.5 416.2L724.2 417.2L722.3 424.3L702.5 428.6L693.8 424.8L681.9 415.8L679.5 403.5L684.8 391.2L695.2 391.8L703.2 388.1L703.8 384.7L708.4 383L709.9 374.8L715.3 373.3L718.9 366.8L726 366.7Z'
};

/* Stock factories & representative offices (lat / lon). `dx`/`dy` = small display
   offset for markers that would otherwise overlap (Plzeň ↔ Božkov).
   `la`/`lx`/`ly` = label anchor + offset (hand-placed to avoid collisions). */
const EU_CITIES = [
  { id: 'lublin',     lat: 51.2465, lon: 22.5684, hq: true, la: 'start', lx: 13, ly: 4,
    name: { en: 'Lublin', pl: 'Lublin', cz: 'Lublin', it: 'Lublino', sk: 'Lublin', de: 'Lublin', fr: 'Lublin' }, country: 'pl' },
  { id: 'warszawa',   lat: 52.2297, lon: 21.0122, la: 'start', lx: 11, ly: -9,
    name: { en: 'Warsaw', pl: 'Warszawa', cz: 'Varšava', it: 'Varsavia', sk: 'Varšava', de: 'Warschau', fr: 'Varsovie' }, country: 'pl' },
  { id: 'bielsko',    lat: 49.8224, lon: 19.0444, la: 'start', lx: 13, ly: 5,
    name: { en: 'Bielsko-Biała', pl: 'Bielsko-Biała', cz: 'Bielsko-Biała', it: 'Bielsko-Biała', sk: 'Bielsko-Biała', de: 'Bielsko-Biała', fr: 'Bielsko-Biała' }, country: 'pl' },
  { id: 'praha',      lat: 50.0755, lon: 14.4378, la: 'middle', lx: 0, ly: -15,
    name: { en: 'Prague', pl: 'Praga', cz: 'Praha', it: 'Praga', sk: 'Praha', de: 'Prag', fr: 'Prague' }, country: 'cz' },
  { id: 'plzen',      lat: 49.7384, lon: 13.3736, dx: -6, dy: -4, la: 'end', lx: -14, ly: 4,
    name: { en: 'Pilsen', pl: 'Pilzno', cz: 'Plzeň', it: 'Pilsen', sk: 'Plzeň', de: 'Pilsen', fr: 'Pilsen' }, country: 'cz' },
  { id: 'bozkov',     lat: 49.7256, lon: 13.4342, dx: 12, dy: 9, la: 'start', lx: 9, ly: 18,
    name: { en: 'Božkov', pl: 'Božkov', cz: 'Božkov', it: 'Božkov', sk: 'Božkov', de: 'Božkov', fr: 'Božkov' }, country: 'cz' },
  { id: 'bratislava', lat: 48.1486, lon: 17.1077, la: 'start', lx: 13, ly: 6,
    name: { en: 'Bratislava', pl: 'Bratysława', cz: 'Bratislava', it: 'Bratislava', sk: 'Bratislava', de: 'Bratislava', fr: 'Bratislava' }, country: 'sk' },
  { id: 'milano',     lat: 45.4642, lon: 9.19, la: 'middle', lx: 0, ly: 21,
    name: { en: 'Milan', pl: 'Mediolan', cz: 'Milán', it: 'Milano', sk: 'Miláno', de: 'Mailand', fr: 'Milan' }, country: 'it' },
  { id: 'zagreb',     lat: 45.815,  lon: 15.9819, la: 'start', lx: 13, ly: 4,
    name: { en: 'Zagreb', pl: 'Zagrzeb', cz: 'Záhřeb', it: 'Zagabria', sk: 'Záhreb', de: 'Zagreb', fr: 'Zagreb' }, country: 'hr' },
  { id: 'paris',      lat: 48.8566, lon: 2.3522, la: 'end', lx: -14, ly: 5,
    name: { en: 'Paris', pl: 'Paryż', cz: 'Paříž', it: 'Parigi', sk: 'Paríž', de: 'Paris', fr: 'Paris' }, country: 'fr' },
  { id: 'hamburg',    lat: 53.5511, lon: 9.9937, la: 'middle', lx: 0, ly: -15,
    name: { en: 'Hamburg', pl: 'Hamburg', cz: 'Hamburk', it: 'Amburgo', sk: 'Hamburg', de: 'Hamburg', fr: 'Hambourg' }, country: 'de' },
  { id: 'london',     lat: 51.5074, lon: -0.1278, la: 'end', lx: -14, ly: 4,
    name: { en: 'London', pl: 'Londyn', cz: 'Londýn', it: 'Londra', sk: 'Londýn', de: 'London', fr: 'Londres' }, country: 'gb' }
];

const EU_I18N = {
  countries: {
    pl: { en: 'Poland', pl: 'Polska', cz: 'Polsko', it: 'Polonia', sk: 'Poľsko', de: 'Polen', fr: 'Pologne' },
    cz: { en: 'Czechia', pl: 'Czechy', cz: 'Česko', it: 'Cechia', sk: 'Česko', de: 'Tschechien', fr: 'Tchéquie' },
    sk: { en: 'Slovakia', pl: 'Słowacja', cz: 'Slovensko', it: 'Slovacchia', sk: 'Slovensko', de: 'Slowakei', fr: 'Slovaquie' },
    it: { en: 'Italy', pl: 'Włochy', cz: 'Itálie', it: 'Italia', sk: 'Taliansko', de: 'Italien', fr: 'Italie' },
    hr: { en: 'Croatia', pl: 'Chorwacja', cz: 'Chorvatsko', it: 'Croazia', sk: 'Chorvátsko', de: 'Kroatien', fr: 'Croatie' },
    fr: { en: 'France', pl: 'Francja', cz: 'Francie', it: 'Francia', sk: 'Francúzsko', de: 'Frankreich', fr: 'France' },
    de: { en: 'Germany', pl: 'Niemcy', cz: 'Německo', it: 'Germania', sk: 'Nemecko', de: 'Deutschland', fr: 'Allemagne' },
    gb: { en: 'United Kingdom', pl: 'Wielka Brytania', cz: 'Spojené království', it: 'Regno Unito', sk: 'Spojené kráľovstvo', de: 'Vereinigtes Königreich', fr: 'Royaume-Uni' }
  },
  hq: { en: 'Home of the foundation', pl: 'Dom fundacji', cz: 'Domov nadace', it: 'Casa della fondazione', sk: 'Domov nadácie', de: 'Zuhause der Stiftung', fr: 'Berceau de la fondation' }
};

(function () {
  const stage = document.getElementById('euMap');
  const chipsWrap = document.getElementById('euCities');
  if (!stage || !chipsWrap) return;

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const lang = () => localStorage.getItem('fs-lang') || 'en';

  /* precompute marker positions */
  EU_CITIES.forEach(c => {
    const p = EU_MAP.project(c.lat, c.lon);
    c.tx = p.x; c.ty = p.y;                    // true position
    c.x = p.x + (c.dx || 0); c.y = p.y + (c.dy || 0); // display position
  });

  /* ---- build SVG ---- */
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${EU_MAP.w} ${EU_MAP.h}`);
  svg.setAttribute('class', 'eu-svg');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Stock in Europe — map');

  const defs = document.createElementNS(SVG_NS, 'defs');
  defs.innerHTML = '<radialGradient id="euGlow" cx="55%" cy="44%" r="68%">' +
    '<stop offset="0%" stop-color="rgba(205,158,12,.15)"/>' +
    '<stop offset="55%" stop-color="rgba(205,158,12,.05)"/>' +
    '<stop offset="100%" stop-color="rgba(205,158,12,0)"/></radialGradient>' +
    '<filter id="euDepth" x="-6%" y="-8%" width="112%" height="120%">' +
    '<feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#00101f" flood-opacity=".45"/></filter>';
  svg.appendChild(defs);

  const glow = document.createElementNS(SVG_NS, 'rect');
  glow.setAttribute('width', EU_MAP.w); glow.setAttribute('height', EU_MAP.h);
  glow.setAttribute('fill', 'url(#euGlow)');
  glow.setAttribute('class', 'eu-glow');
  svg.appendChild(glow);

  /* graticule — faint meridians & parallels, like a real chart */
  const grat = document.createElementNS(SVG_NS, 'g');
  grat.setAttribute('class', 'eu-grat');
  let gd = '';
  for (let lon = -10; lon <= 30; lon += 5) { const x = EU_MAP.project(50, lon).x; gd += `M${x.toFixed(1)} 0V${EU_MAP.h}`; }
  for (let lat = 42; lat <= 58; lat += 4) { const y = EU_MAP.project(lat, 0).y; gd += `M0 ${y.toFixed(1)}H${EU_MAP.w}`; }
  const gratPath = document.createElementNS(SVG_NS, 'path');
  gratPath.setAttribute('d', gd);
  grat.appendChild(gratPath);
  svg.appendChild(grat);

  /* land (soft drop shadow gives the continent gentle depth) */
  const landG = document.createElementNS(SVG_NS, 'g');
  landG.setAttribute('filter', 'url(#euDepth)');
  const land = document.createElementNS(SVG_NS, 'path');
  land.setAttribute('d', EU_MAP.base);
  land.setAttribute('class', 'eu-land');
  landG.appendChild(land);
  const landActive = document.createElementNS(SVG_NS, 'path');
  landActive.setAttribute('d', EU_MAP.active);
  landActive.setAttribute('class', 'eu-land-active');
  landG.appendChild(landActive);
  svg.appendChild(landG);

  /* hand-drawn chart decorations: waves in open water + a compass rose */
  const decor = document.createElementNS(SVG_NS, 'g');
  decor.innerHTML =
    '<path class="eu-wave" d="M140 246q10 -9 20 0q10 9 20 0M150 262q10 -9 20 0q10 9 20 0' +
    'M196 496q10 -9 20 0q10 9 20 0M206 512q10 -9 20 0q10 9 20 0' +
    'M396 606q10 -9 20 0q10 9 20 0M406 622q10 -9 20 0q10 9 20 0"/>' +
    '<g class="eu-compass" transform="translate(74 88)">' +
    '<circle r="27"/><circle r="19.5"/>' +
    '<path d="M0 -27L5.5 -5.5L27 0L5.5 5.5L0 27L-5.5 5.5L-27 0L-5.5 -5.5Z"/>' +
    '<path d="M0 -19.5L3 -3L19.5 0L3 3L0 19.5L-3 3L-19.5 0L-3 -3Z" transform="rotate(45)" opacity=".55"/>' +
    '<text y="-33" text-anchor="middle">N</text></g>';
  svg.appendChild(decor);

  /* markers */
  const markers = document.createElementNS(SVG_NS, 'g');
  EU_CITIES.forEach((c, i) => {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', 'eu-marker' + (c.hq ? ' hq' : ''));
    g.setAttribute('transform', `translate(${c.x} ${c.y})`);
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.dataset.city = c.id;
    g.style.setProperty('--d', (0.25 + i * 0.07) + 's');
    g.style.setProperty('--pd', ((i * 0.37) % 2.4).toFixed(2) + 's'); // desynchronised pulses
    let inner = '';
    if (c.dx || c.dy) { // leader line back to the true location
      inner += `<line class="leader" x1="${-(c.dx || 0)}" y1="${-(c.dy || 0)}" x2="0" y2="0"/>`;
    }
    inner += '<circle class="hit" r="17"/><circle class="halo" r="9"/><circle class="dot" r="4.6"/>';
    if (c.hq) inner += '<circle class="hq-ring" r="13"/>';
    inner += `<text class="eu-label" text-anchor="${c.la}" x="${c.lx}" y="${c.ly}"></text>`;
    g.innerHTML = inner;
    markers.appendChild(g);
  });
  svg.appendChild(markers);
  stage.appendChild(svg);

  function renderLabels() {
    const l = lang();
    markers.querySelectorAll('.eu-marker').forEach(m => {
      const c = cityById(m.dataset.city);
      m.querySelector('.eu-label').textContent = c.name[l] || c.name.en;
    });
  }

  /* tooltip */
  const tip = document.createElement('div');
  tip.className = 'eu-tip';
  tip.setAttribute('role', 'status');
  tip.innerHTML = '<span class="tt-city"></span><span class="tt-country"></span><span class="tt-hq"></span>';
  stage.appendChild(tip);
  const ttCity = tip.querySelector('.tt-city');
  const ttCountry = tip.querySelector('.tt-country');
  const ttHq = tip.querySelector('.tt-hq');

  let pinned = null;   // city id pinned by click / keyboard / chip
  let hovered = null;  // city id currently hovered

  function cityById(id) { return EU_CITIES.find(c => c.id === id); }

  function showTip(id) {
    const c = cityById(id);
    if (!c) return;
    const l = lang();
    ttCity.textContent = c.name[l] || c.name.en;
    ttCountry.textContent = EU_I18N.countries[c.country][l] || EU_I18N.countries[c.country].en;
    ttHq.textContent = c.hq ? (EU_I18N.hq[l] || EU_I18N.hq.en) : '';
    ttHq.style.display = c.hq ? '' : 'none';
    const py = c.y / EU_MAP.h * 100;
    tip.classList.toggle('below', py < 22);
    tip.classList.add('show');
    /* pixel-aware horizontal clamp so the tooltip never leaves the stage */
    const stageW = stage.clientWidth || 1;
    const half = (tip.offsetWidth || 130) / 2 + 6;
    const pxPos = Math.min(Math.max(c.x / EU_MAP.w * stageW, half), stageW - half);
    tip.style.left = (pxPos / stageW * 100) + '%';
    tip.style.top = py + '%';
  }
  function hideTip() { tip.classList.remove('show'); }

  function syncActive() {
    const id = hovered || pinned;
    markers.querySelectorAll('.eu-marker').forEach(m =>
      m.classList.toggle('active', m.dataset.city === pinned));
    chipsWrap.querySelectorAll('.eu-chip').forEach(ch =>
      ch.classList.toggle('active', ch.dataset.city === pinned));
    if (id) showTip(id); else hideTip();
  }

  markers.querySelectorAll('.eu-marker').forEach(m => {
    const id = m.dataset.city;
    m.addEventListener('mouseenter', () => { hovered = id; syncActive(); });
    m.addEventListener('mouseleave', () => { hovered = null; syncActive(); });
    m.addEventListener('click', e => {
      e.stopPropagation();
      pinned = (pinned === id) ? null : id;
      syncActive();
    });
    m.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        pinned = (pinned === id) ? null : id;
        syncActive();
      }
    });
    m.addEventListener('focus', () => { hovered = id; syncActive(); });
    m.addEventListener('blur', () => { hovered = null; syncActive(); });
  });

  /* chips */
  function renderChips() {
    const l = lang();
    chipsWrap.innerHTML = '';
    EU_CITIES.forEach(c => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'eu-chip' + (c.hq ? ' hq' : '') + (pinned === c.id ? ' active' : '');
      b.dataset.city = c.id;
      b.innerHTML = '<span class="cdot"></span>' + (c.name[l] || c.name.en);
      b.setAttribute('aria-label', (c.name[l] || c.name.en) + ', ' +
        (EU_I18N.countries[c.country][l] || EU_I18N.countries[c.country].en));
      b.addEventListener('click', e => {
        e.stopPropagation();
        pinned = (pinned === c.id) ? null : c.id;
        syncActive();
      });
      b.addEventListener('mouseenter', () => { hovered = c.id; syncActive(); });
      b.addEventListener('mouseleave', () => { hovered = null; syncActive(); });
      chipsWrap.appendChild(b);
    });
  }

  function refreshAria() {
    const l = lang();
    markers.querySelectorAll('.eu-marker').forEach(m => {
      const c = cityById(m.dataset.city);
      m.setAttribute('aria-label', (c.name[l] || c.name.en) + ', ' +
        (EU_I18N.countries[c.country][l] || EU_I18N.countries[c.country].en));
    });
  }

  document.addEventListener('click', () => { if (pinned) { pinned = null; syncActive(); } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && pinned) { pinned = null; syncActive(); } });

  renderChips();
  renderLabels();
  refreshAria();

  /* language switch → re-render labels (main.js calls window.onLangChange) */
  const prevOnLang = window.onLangChange;
  window.onLangChange = function (l) {
    if (typeof prevOnLang === 'function') prevOnLang(l);
    renderChips();
    renderLabels();
    refreshAria();
    if (hovered || pinned) showTip(hovered || pinned);
  };
})();
