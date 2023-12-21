$(document).ready(function () {
  const subtractedTotal = (columnName, deliveryTotal, salesValue) => {
    let subTotal = salesValue - deliveryTotal;
    $(columnName).html(subTotal);
  };

  /*Booking Column Total*/
  const getBookingTotal = () => {
    let booking_calculated_total_sum = 0;
    $("#currentWeek .booking").each(function () {
      let get_booking_textbox_value = $(this).val();
      if ($.isNumeric(get_booking_textbox_value)) {
        booking_calculated_total_sum += parseFloat(get_booking_textbox_value);
      }
    });
    return booking_calculated_total_sum;
  };

  let bookingTotal = getBookingTotal();
  $(".booking-total").html(bookingTotal);

  $("#currentWeek").on("input", ".booking", function () {
    let totalBooking = getBookingTotal();
    $(".booking-total").html(totalBooking);
  });

  /*Rst Column Total*/
  const getRstTotal = () => {
    let rst_calculated_total_sum = 0;
    $("#currentWeek .rst").each(function () {
      let get_rst_textbox_value = $(this).val();
      if ($.isNumeric(get_rst_textbox_value)) {
        rst_calculated_total_sum += parseFloat(get_rst_textbox_value);
      }
    });
    return rst_calculated_total_sum;
  };

  let rstTotal = getRstTotal();
  $(".rst-total").html(rstTotal);

  $("#currentWeek").on("input", ".rst", function () {
    let totalRst = getRstTotal();
    $(".rst-total").html(totalRst);
    getSubTotalOfCurrentWeek();
  });

  /*Rst Pending Column Total*/
  const getRstPendingTotal = () => {
    let rst_pending_calculated_total_sum = 0;
    $("#currentWeek .rst-pending").each(function () {
      let get_rst_pending_textbox_value = $(this).val();
      if ($.isNumeric(get_rst_pending_textbox_value)) {
        rst_pending_calculated_total_sum += parseFloat(
          get_rst_pending_textbox_value
        );
      }
    });
    return rst_pending_calculated_total_sum;
  };

  let rstPendingTotal = getRstPendingTotal();
  $(".rst-pending-total").html(rstPendingTotal);

  $("#currentWeek").on("input", ".rst-pending", function () {
    let rstPenTotal = getRstPendingTotal();
    $(".rst-pending-total").html(rstPenTotal);
    getSubTotalOfCurrentWeek();
  });
  const getSubTotal = (rowClass) => {
    let clickedClass = "#currentWeek " + rowClass;

    let sub_calculated_total_sum = 0;
    $(clickedClass).each(function () {
      let get_sub_textbox_value = parseInt($(this).text());
      if ($.isNumeric(get_sub_textbox_value)) {
        sub_calculated_total_sum += parseFloat(get_sub_textbox_value);
      }
    });
    return sub_calculated_total_sum;
  };
  /*DP Column Total*/
  const getDpTotal = () => {
    let dp_calculated_total_sum = 0;
    $("#currentWeek .dp").each(function () {
      let get_dp_textbox_value = $(this).val();
      if ($.isNumeric(get_dp_textbox_value)) {
        dp_calculated_total_sum += parseFloat(get_dp_textbox_value);
      }
    });
    return dp_calculated_total_sum;
  };

  let TotalDp = getDpTotal();
  $(".dp-total").html(TotalDp);

  $("#currentWeek").on("input", ".dp", function () {
    let dpTotal = getDpTotal();
    $(".dp-total").html(dpTotal);
    getSubTotalOfCurrentWeek();
  });

  /*HCB Column Total*/
  const getHcbTotal = () => {
    let hcb_calculated_total_sum = 0;
    $("#currentWeek .hcb").each(function () {
      let get_hcb_textbox_value = $(this).val();
      if ($.isNumeric(get_hcb_textbox_value)) {
        hcb_calculated_total_sum += parseFloat(get_hcb_textbox_value);
      }
    });
    return hcb_calculated_total_sum;
  };

  let TotalHcb = getHcbTotal();
  $(".hcb-total").html(TotalHcb);

  $("#currentWeek").on("input", ".hcb", function () {
    let hcbTotal = getHcbTotal();
    $(".hcb-total").html(hcbTotal);
    getSubTotalOfCurrentWeek();
  });

  /*MCB Column Total*/
  const getMcbTotal = () => {
    let mcb_calculated_total_sum = 0;
    $("#currentWeek .mcb").each(function () {
      let get_mcb_textbox_value = $(this).val();
      if ($.isNumeric(get_mcb_textbox_value)) {
        mcb_calculated_total_sum += parseFloat(get_mcb_textbox_value);
      }
    });
    return mcb_calculated_total_sum;
  };

  let TotalMcb = getMcbTotal();
  $(".mcb-total").html(TotalMcb);

  $("#currentWeek").on("input", ".mcb", function () {
    let mcbTotal = getMcbTotal();
    $(".mcb-total").html(mcbTotal);
    getSubTotalOfCurrentWeek();
  });

  /*LCB Column Total*/
  const getLcbTotal = () => {
    let lcb_calculated_total_sum = 0;
    $("#currentWeek .lcb").each(function () {
      let get_lcb_textbox_value = $(this).val();
      if ($.isNumeric(get_lcb_textbox_value)) {
        lcb_calculated_total_sum += parseFloat(get_lcb_textbox_value);
      }
    });
    return lcb_calculated_total_sum;
  };

  let TotalLcb = getLcbTotal();
  $(".lcb-total").html(TotalLcb);

  $("#currentWeek").on("input", ".lcb", function () {
    let lcbTotal = getLcbTotal();
    $(".lcb-total").html(lcbTotal);
    getSubTotalOfCurrentWeek();
  });

  /* get*/
  const getOpporuntityTotal = (rowClass) => {
    let calculated_total_sum = 0;
    let clickedClass = "#currentWeek " + rowClass;
    $(clickedClass).each(function () {
      let get_textbox_value = $(this).val();
      if ($.isNumeric(get_textbox_value)) {
        calculated_total_sum += parseFloat(get_textbox_value);
      }
    });

    return calculated_total_sum;
  };
  /* get total*/
  const getTotal = (rowClass) => {
    console.log("rowClass: ", rowClass);
    let calculated_total_sum = 0;
    let clickedClass = "#currentWeek " + rowClass;
    console.log("clickedClass: ", clickedClass);
    $(clickedClass).each(function () {
      let get_textbox_value = $(this).html();
      console.log("get_textbox_value: ", get_textbox_value);
      console.log("this: ", this);
      if ($.isNumeric(get_textbox_value)) {
        calculated_total_sum += parseFloat(get_textbox_value);
      }
    });

    return calculated_total_sum;
  };

  $(".opporuntity-1-total").html(getOpporuntityTotal(".opporuntity-1"));
  $("#currentWeek").on("input", ".opporuntity-1", function () {
    $(".opporuntity-1-total").html(getOpporuntityTotal(".opporuntity-1"));
    subtractedTotal(
      ".q1-diff-sd-total",
      $(".opporuntity-1-total").html(),
      $(".bq1").val()
    );
    $(".dt-total").html(getSubTotal(".dt"));
  });

  $(".opporuntity-2-total").html(getOpporuntityTotal(".opporuntity-2"));
  $("#currentWeek").on("input", ".opporuntity-2", function () {
    $(".opporuntity-2-total").html(getOpporuntityTotal(".opporuntity-2"));
    subtractedTotal(
      ".q2-diff-sd-total",
      $(".opporuntity-2-total").html(),
      $(".bq2").val()
    );
    $(".dt-total").html(getSubTotal(".dt"));
  });

  $(".opporuntity-3-total").html(getOpporuntityTotal(".opporuntity-3"));
  $("#currentWeek").on("input", ".opporuntity-3", function () {
    $(".opporuntity-3-total").html(getOpporuntityTotal(".opporuntity-3"));
    subtractedTotal(
      ".q3-diff-sd-total",
      $(".opporuntity-3-total").html(),
      $(".bq3").val()
    );
    $(".dt-total").html(getSubTotal(".dt"));
  });

  $(".p1-m1-total").html(getOpporuntityTotal(".p1-m1"));
  $("#currentWeek").on("input", ".p1-m1", function () {
    $(".p1-m1-total").html(getOpporuntityTotal(".p1-m1"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
  });
  $(".p1-m2-total").html(getOpporuntityTotal(".p1-m2"));
  $("#currentWeek").on("input", ".p1-m2", function () {
    $(".p1-m2-total").html(getOpporuntityTotal(".p1-m2"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
  });
  $(".p1-m3-total").html(getOpporuntityTotal(".p1-m3"));
  $("#currentWeek").on("input", ".p1-m3", function () {
    $(".p1-m3-total").html(getOpporuntityTotal(".p1-m3"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
  });
  $(".p1-col1-total").html(getOpporuntityTotal(".p1-col1"));
  $("#currentWeek").on("input", ".p1-col1", function () {
    $(".p1-col1-total").html(getOpporuntityTotal(".p1-col1"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
    $(".sd-total").html(getTotal(".sd"));
  });
  $(".p1-col2-total").html(getOpporuntityTotal(".p1-col2"));
  $("#currentWeek").on("input", ".p1-col2", function () {
    $(".p1-col2-total").html(getOpporuntityTotal(".p1-col2"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
    $(".sd-total").html(getTotal(".sd"));
  });
  $(".p1-col3-total").html(getOpporuntityTotal(".p1-col3"));
  $("#currentWeek").on("input", ".p1-col3", function () {
    $(".p1-col3-total").html(getOpporuntityTotal(".p1-col3"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
  });
  $(".p1-col4-total").html(getOpporuntityTotal(".p1-col4"));
  $("#currentWeek").on("input", ".p1-col4", function () {
    $(".p1-col4-total").html(getOpporuntityTotal(".p1-col4"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
  });
  $(".p1-col5-total").html(getOpporuntityTotal(".p1-col5"));
  $("#currentWeek").on("input", ".p1-col5", function () {
    $(".p1-col5-total").html(getOpporuntityTotal(".p1-col5"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
  });
  $(".p1-col6-total").html(getOpporuntityTotal(".p1-col6"));
  $("#currentWeek").on("input", ".p1-col6", function () {
    $(".p1-col6-total").html(getOpporuntityTotal(".p1-col6"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
  });
  $(".p1-col7-total").html(getOpporuntityTotal(".p1-col7"));
  $("#currentWeek").on("input", ".p1-col7", function () {
    $(".p1-col7-total").html(getOpporuntityTotal(".p1-col7"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
  });
  $(".p1-main-total").html(getTotal(".proj1-month-total"));

  $(".p2-m1-total").html(getOpporuntityTotal(".p2-m1"));
  $("#currentWeek").on("input", ".p2-m1", function () {
    $(".p2-m1-total").html(getOpporuntityTotal(".p2-m1"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-m2-total").html(getOpporuntityTotal(".p2-m2"));
  $("#currentWeek").on("input", ".p2-m2", function () {
    $(".p2-m2-total").html(getOpporuntityTotal(".p2-m2"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-m3-total").html(getOpporuntityTotal(".p2-m3"));
  $("#currentWeek").on("input", ".p2-m3", function () {
    $(".p2-m3-total").html(getOpporuntityTotal(".p2-m3"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-col1-total").html(getOpporuntityTotal(".p2-col1"));
  $("#currentWeek").on("input", ".p2-col1", function () {
    $(".p2-col1-total").html(getOpporuntityTotal(".p2-col1"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-col2-total").html(getOpporuntityTotal(".p2-col2"));
  $("#currentWeek").on("input", ".p2-col2", function () {
    $(".p2-col2-total").html(getOpporuntityTotal(".p2-col2"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-col3-total").html(getOpporuntityTotal(".p2-col3"));
  $("#currentWeek").on("input", ".p2-col3", function () {
    $(".p2-col3-total").html(getOpporuntityTotal(".p2-col3"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-col4-total").html(getOpporuntityTotal(".p2-col4"));
  $("#currentWeek").on("input", ".p2-col4", function () {
    $(".p2-col4-total").html(getOpporuntityTotal(".p2-col4"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-col5-total").html(getOpporuntityTotal(".p2-col5"));
  $("#currentWeek").on("input", ".p2-col5", function () {
    $(".p2-col5-total").html(getOpporuntityTotal(".p2-col5"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-col6-total").html(getOpporuntityTotal(".p2-col6"));
  $("#currentWeek").on("input", ".p2-col6", function () {
    $(".p2-col6-total").html(getOpporuntityTotal(".p2-col6"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-col7-total").html(getOpporuntityTotal(".p2-col7"));
  $("#currentWeek").on("input", ".p2-col7", function () {
    $(".p2-col7-total").html(getOpporuntityTotal(".p2-col7"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
  });
  $(".p2-main-total").html(getTotal(".proj2-month-total"));
  // $("#currentWeek").on("input", ".proj2-month-total", function () {
  //   $(".p2-main-total").html(getOpporuntityTotal(".proj2-month-total"));
  // });

  /*SubTotal Column Total*/

  $(".dt-total").html(getSubTotal(".dt"));
  $("#currentWeek").on("input", ".dt", function () {
    $(".dt-total").html(getSubTotal(".dt"));
  });

  // $(".diff-total").html(getSubTotal(".diff"));
  // $("#currentWeek").on("input", ".diff", function () {
  //   $(".diff-total").html(getSubTotal(".diff"));
  // });

  subtractedTotal(
    ".q1-diff-sd-total",
    $(".opporuntity-1-total").html(),
    $(".bq1").val()
  );
  subtractedTotal(
    ".q2-diff-sd-total",
    $(".opporuntity-2-total").html(),
    $(".bq2").val()
  );
  subtractedTotal(
    ".q3-diff-sd-total",
    $(".opporuntity-3-total").html(),
    $(".bq3").val()
  );

  subtractedTotal(".sd-1", 5, $(".p1-main-total").html());
  subtractedTotal(".sd-2", 8, $(".p1-m1-total").html());
  subtractedTotal(".sd-3", 9, $(".p1-m2-total").html());
  subtractedTotal(".sd-4", 7, $(".p1-m3-total").html());
  subtractedTotal(".sd-5", 5, $(".p2-main-total").html());
  subtractedTotal(".sd-6", 58, $(".p2-m1-total").html());
  subtractedTotal(".sd-7", 58, $(".p2-m2-total").html());
  subtractedTotal(".sd-8", 57, $(".p2-m3-total").html());

  /*SD Column Total*/
  $(".sd-total").html(getTotal(".sd"));
  $("#currentWeek").on("input", ".sd", function () {
    $(".sd-total").html(getTotal(".sd"));
  });
  /*SD Column Total*/
  // const getSdTotal = () => {
  //   let sd_calculated_total_sum = 0;
  //   $("#currentWeek .sd").each(function () {
  //     let get_sd_textbox_value = $(this).val();
  //     if ($.isNumeric(get_sd_textbox_value)) {
  //       sd_calculated_total_sum += parseFloat(get_sd_textbox_value);
  //     }
  //   });
  //   return sd_calculated_total_sum;
  // };

  // let TotalSd = getSdTotal();
  // $(".sd-total").html(TotalSd);

  // $("#currentWeek").on("input", ".sd", function () {
  //   let sdTotal = getSdTotal();
  //   $(".sd-total").html(sdTotal);
  // });

  /*Diff Column Total*/
  // const getDiffTotal = () => {
  //   let diff_calculated_total_sum = 0;
  //   $("#currentWeek .diff").each(function () {
  //     let get_diff_textbox_value = $(this).val();
  //     if ($.isNumeric(get_diff_textbox_value)) {
  //       diff_calculated_total_sum += parseFloat(get_diff_textbox_value);
  //     }
  //   });
  //   return diff_calculated_total_sum;
  // };

  // let TotalDiff = getDiffTotal();
  // $(".diff-total").html(TotalDiff);

  // $("#currentWeek").on("input", ".diff", function () {
  //   let diffTotal = getDiffTotal();
  //   $(".diff-total").html(diffTotal);
  // });

  /*Sub Total Value*/
  const getSubTotalOfCurrentWeek = () => {
    let totalRst = parseInt($(".rst-total").text());
    $(".subTotal-rst").html(totalRst);
    let totalRstPending = parseInt($(".rst-pending-total").text());
    $(".subTotal-rst-pending").html(totalRst + totalRstPending);
    let totalDp = parseInt($(".dp-total").text());
    $(".subTotal-dp").html(totalRst + totalRstPending + totalDp);
    let totalHcb = parseInt($(".hcb-total").text());
    $(".subTotal-hcb").html(totalRst + totalRstPending + totalDp + totalHcb);
    let totalMcb = parseInt($(".mcb-total").text());
    $(".subTotal-mcb").html(
      totalRst + totalRstPending + totalDp + totalHcb + totalMcb
    );
    let totalLcb = parseInt($(".lcb-total").text());
    $(".subTotal-lcb").html(
      totalRst + totalRstPending + totalDp + totalHcb + totalMcb + totalLcb
    );

    return null;
  };

  getSubTotalOfCurrentWeek();

  // Collapsible rows
  $(".hidden-row tr:not(.total)").hide();

  // $('tr.header').click(function() {
  //   console.log("clicked")
  //   $(this).find('span').text(function(_, value) {
  //     return value == '+' ? '-' : '+'
  //   });

  //   $(this).nextUntil('tr.header').slideToggle(200, function() {});
  // });

  $(function () {
    $("th.expandChildTable").on("click", function () {
      // $(this).parent().next("tr").toggle();

      // $(this).nextUntil('tr.newproject').toggle();
      $(this).toggleClass("selected").nextUntil("tr.total").next().toggle();
    });
  });

  $(".expandChildTable").click(function (e) {
    e.preventDefault();
    $(".cat" + $(this).toggleClass("selected").attr("data-prod-cat")).toggle();
  });
});
