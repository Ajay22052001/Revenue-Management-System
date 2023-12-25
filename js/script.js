$(document).ready(function () {
  const subtractedTotal = (columnName, deliveryTotal, salesValue) => {
    let subTotal = salesValue - deliveryTotal;
    $(columnName).html(subTotal);
  };
  const weekOnWeeksubtractedTotal = (columnName, currentWeek, lastWeek) => {
    let subTotal = currentWeek - lastWeek;

    $(columnName).html(subTotal);
  };

  const getWoWTotal = (columnName, currentWeek, lastWeek) => {
    let subTotal = parseInt(currentWeek) + parseInt(lastWeek);
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
    let calculated_total_sum = 0;
    let clickedClass = "#currentWeek " + rowClass;
    $(clickedClass).each(function () {
      let get_textbox_value = $(this).text();
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
    subtractedTotal(".sd-2", 8, $(".p1-m1-total").html());
    $(".sd-total").html(getTotal(".sd"));
  });
  // $(".sd-total").html(13);

  $(".p1-m2-total").html(getOpporuntityTotal(".p1-m2"));
  $("#currentWeek").on("input", ".p1-m2", function () {
    $(".p1-m2-total").html(getOpporuntityTotal(".p1-m2"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
    subtractedTotal(".sd-3", 9, $(".p1-m2-total").html());
    $(".sd-total").html(getTotal(".sd"));
  });
  $(".p1-m3-total").html(getOpporuntityTotal(".p1-m3"));
  $("#currentWeek").on("input", ".p1-m3", function () {
    $(".p1-m3-total").html(getOpporuntityTotal(".p1-m3"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
    // subtractedTotal(".sd-4", 7, $(".p1-m3-total").html());
    $(".sd-total").html(getTotal(".sd"));
  });
  $(".p1-col1-total").html(getOpporuntityTotal(".p1-col1"));

  $("#currentWeek").on("input", ".p1-col1", function () {
    $(".p1-col1-total").html(getOpporuntityTotal(".p1-col1"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
  });

  $(".p1-col2-total").html(getOpporuntityTotal(".p1-col2"));
  $("#currentWeek").on("input", ".p1-col2", function () {
    $(".p1-col2-total").html(getOpporuntityTotal(".p1-col2"));
    $(".p1-main-total").html(getTotal(".proj1-month-total"));
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
    subtractedTotal(".sd-6", 58, $(".p2-m1-total").html());
    $(".sd-total").html(getTotal(".sd"));
  });
  $(".p2-m2-total").html(getOpporuntityTotal(".p2-m2"));
  $("#currentWeek").on("input", ".p2-m2", function () {
    $(".p2-m2-total").html(getOpporuntityTotal(".p2-m2"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
    subtractedTotal(".sd-7", 58, $(".p2-m2-total").html());
    $(".sd-total").html(getTotal(".sd"));
  });
  $(".p2-m3-total").html(getOpporuntityTotal(".p2-m3"));
  $("#currentWeek").on("input", ".p2-m3", function () {
    $(".p2-m3-total").html(getOpporuntityTotal(".p2-m3"));
    $(".p2-main-total").html(getTotal(".proj2-month-total"));
    subtractedTotal(".sd-8", 57, $(".p2-m3-total").html());
    $(".sd-total").html(getTotal(".sd"));
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

  /*SubTotal Column Total*/

  $(".dt-total").html(getSubTotal(".dt"));
  $("#currentWeek").on("input", ".dt", function () {
    $(".dt-total").html(getSubTotal(".dt"));
  });

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

  subtractedTotal(".sd-1", 426, $(".p1-main-total").html());
  subtractedTotal(".sd-2", 150, $(".p1-m1-total").html());
  subtractedTotal(".sd-3", 120, $(".p1-m2-total").html());
  subtractedTotal(".sd-4", 11, $(".p1-m3-total").html());
  subtractedTotal(".sd-5", 350, $(".p2-main-total").html());
  subtractedTotal(".sd-6", 115, $(".p2-m1-total").html());
  subtractedTotal(".sd-7", 122, $(".p2-m2-total").html());
  subtractedTotal(".sd-8", 113, $(".p2-m3-total").html());

  /*Week on week */
  weekOnWeeksubtractedTotal(
    ".wow-r2-1",
    $(".booking-total").html(),
    $(".last-booking-total").html()
  );
  weekOnWeeksubtractedTotal(
    ".wow-r2-2",
    $(".rst-total").html(),
    $(".last-rst-total").html()
  );
  weekOnWeeksubtractedTotal(
    ".wow-r2-3",
    $(".rst-pending-total").html(),
    $(".last-rst-pending-total").html()
  );
  weekOnWeeksubtractedTotal(
    ".wow-r2-4",
    $(".dp-total").html(),
    $(".last-dp-total").html()
  );
  weekOnWeeksubtractedTotal(
    ".wow-r2-5",
    $(".hcb-total").html(),
    $(".last-hcb-total").html()
  );
  weekOnWeeksubtractedTotal(
    ".wow-r2-6",
    $(".mcb-total").html(),
    $(".last-mcb-total").html()
  );
  weekOnWeeksubtractedTotal(
    ".wow-r2-7",
    $(".lcb-total").html(),
    $(".last-lcb-total").html()
  );
  weekOnWeeksubtractedTotal(
    ".wow-r2-8",
    $(".dt-total").html(),
    $(".last-dt-total").html()
  );
  weekOnWeeksubtractedTotal(
    ".wow-r2-10",
    64,
    // $(".sd-total").html(),
    $(".last-sd-total").html()
  );
  weekOnWeeksubtractedTotal(
    ".wow-r2-11",
    // $(".sdt-total").html(),
    519,
    $(".last-sdt-total").html()
  );

  // getWoWTotal(
  //   ".subTotal-final",
  //   $(".sdt-total").html(),
  //   $(".last-sdt-total").html()
  // );
  $(".subTotal-final").html(getSubTotal(".diff-sd"));

  // getWoWTotal(
  //   ".subTotal-sd",
  //   $(".sd-total").html(),
  //   $(".last-sd-total").html()
  // );
  $(".subTotal-sd").html(getSubTotal(".proj-total"));

  // getWoWTotal(
  //   ".subTotal-dt",
  //   $(".dt-total").html(),
  //   $(".last-dt-total").html()
  // );
  $(".subTotal-dt").html(getSubTotal(".dt"));
  // getWoWTotal(
  //   ".subTotal-booking",
  //   $(".booking-total").html(),
  //   $(".last-booking-total").html()
  // );
  $(".subTotal-booking").html($(".booking-total").html());

  /*Sub Total Value*/
  const getSubTotalOfCurrentWeek = () => {
    let totalRst = parseInt($(".rst-total").text());
    $(".subTotal-rst").html(totalRst);
    let totalRstPending = parseInt($(".rst-pending-total").text());
    $(".subTotal-rst-pending").html(totalRstPending);
    let totalDp = parseInt($(".dp-total").text());
    $(".subTotal-dp").html(totalDp);
    let totalHcb = parseInt($(".hcb-total").text());
    $(".subTotal-hcb").html(totalHcb);
    let totalMcb = parseInt($(".mcb-total").text());
    $(".subTotal-mcb").html(totalMcb);
    let totalLcb = parseInt($(".lcb-total").text());
    $(".subTotal-lcb").html(totalLcb);

    return null;
  };

  getSubTotalOfCurrentWeek();

  $(".sdt-total").html(getSubTotal(".diff-sd"));
  $(".sd-total").html(getSubTotal(".proj-total"));
  $("#currentWeek").on("input", function () {
    weekOnWeeksubtractedTotal(
      ".wow-r2-1",
      $(".booking-total").html(),
      $(".last-booking-total").html()
    );
    weekOnWeeksubtractedTotal(
      ".wow-r2-2",
      $(".rst-total").html(),
      $(".last-rst-total").html()
    );
    weekOnWeeksubtractedTotal(
      ".wow-r2-3",
      $(".rst-pending-total").html(),
      $(".last-rst-pending-total").html()
    );
    weekOnWeeksubtractedTotal(
      ".wow-r2-4",
      $(".dp-total").html(),
      $(".last-dp-total").html()
    );
    weekOnWeeksubtractedTotal(
      ".wow-r2-5",
      $(".hcb-total").html(),
      $(".last-hcb-total").html()
    );
    weekOnWeeksubtractedTotal(
      ".wow-r2-6",
      $(".mcb-total").html(),
      $(".last-mcb-total").html()
    );
    weekOnWeeksubtractedTotal(
      ".wow-r2-7",
      $(".lcb-total").html(),
      $(".last-lcb-total").html()
    );
    weekOnWeeksubtractedTotal(
      ".wow-r2-8",
      $(".dt-total").html(),
      $(".last-dt-total").html()
    );
    weekOnWeeksubtractedTotal(
      ".wow-r2-10",
      
      $(".sd-total").html(),
      $(".last-sd-total").html()
    );
    weekOnWeeksubtractedTotal(
      ".wow-r2-11",
      $(".sdt-total").html(),
     
      $(".last-sdt-total").html()
    );

    // getWoWTotal(
    //   ".subTotal-final",
    //   $(".sdt-total").html(),
    //   $(".last-sdt-total").html()
    // );
    $(".subTotal-final").html(getSubTotal(".diff-sd"));

    $(".subTotal-sd").html(getSubTotal(".proj-total"));

    // getWoWTotal(
    //   ".subTotal-sd",
    //   $(".sd-total").html(),
    //   $(".last-sd-total").html()
    // );
    // getWoWTotal(
    //   ".subTotal-dt",
    //   $(".dt-total").html(),
    //   $(".last-dt-total").html()
    // );
    $(".subTotal-dt").html(getSubTotal(".dt"));
    // getWoWTotal(
    //   ".subTotal-booking",
    //   $(".booking-total").html(),
    //   $(".last-booking-total").html()
    // );
    $(".subTotal-booking").html($(".booking-total").html());
  });
  // Collapsible rows
  $(".hidden-row tr:not(.total)").hide();

  console.log($(".subTotal-dt").html(getSubTotal(".dt")));
  // console.log($(".last-sdt-total").html());

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

// Date picker
function datePicker() {
  var d = document.getElementById("date-input").value;

  // document.getElementById("selected-date").innerHTML = "Date: " + d;

  if (d !== undefined) {
    var datearray = d.split("-");

    var newdate = datearray[2] + "-" + datearray[1] + "-" + datearray[0];
    document.getElementById("selected-date").innerHTML = "Date: " + newdate;
  }
}
