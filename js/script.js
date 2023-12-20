$(document).ready(function () {
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

  /*DT Column Total*/
  const getDtTotal = () => {
    let dt_calculated_total_sum = 0;
    $("#currentWeek .dt").each(function () {
      let get_dt_textbox_value = $(this).val();
      if ($.isNumeric(get_dt_textbox_value)) {
        dt_calculated_total_sum += parseFloat(get_dt_textbox_value);
      }
    });
    return dt_calculated_total_sum;
  };

  let TotalDt = getDtTotal();
  $(".dt-total").html(TotalDt);

  $("#currentWeek").on("input", ".dt", function () {
    let dtTotal = getDtTotal();
    $(".dt-total").html(dtTotal);
  });

  /*SD Column Total*/
  const getSdTotal = () => {
    let sd_calculated_total_sum = 0;
    $("#currentWeek .sd").each(function () {
      let get_sd_textbox_value = $(this).val();
      if ($.isNumeric(get_sd_textbox_value)) {
        sd_calculated_total_sum += parseFloat(get_sd_textbox_value);
      }
    });
    return sd_calculated_total_sum;
  };

  let TotalSd = getSdTotal();
  $(".sd-total").html(TotalSd);

  $("#currentWeek").on("input", ".sd", function () {
    let sdTotal = getSdTotal();
    $(".sd-total").html(sdTotal);
  });

  /*Diff Column Total*/
  const getDiffTotal = () => {
    let diff_calculated_total_sum = 0;
    $("#currentWeek .diff").each(function () {
      let get_diff_textbox_value = $(this).val();
      if ($.isNumeric(get_diff_textbox_value)) {
        diff_calculated_total_sum += parseFloat(get_diff_textbox_value);
      }
    });
    return diff_calculated_total_sum;
  };

  let TotalDiff = getDiffTotal();
  $(".diff-total").html(TotalDiff);

  $("#currentWeek").on("input", ".diff", function () {
    let diffTotal = getDiffTotal();
    $(".diff-total").html(diffTotal);
  });

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

    // $(".subTotal-final").html(
    //   totalRst + totalRstPending + totalDp + totalHcb + totalMcb + totalLcb
    // );

    console.log("totalLcb: ", totalLcb);
    return null;
  };

  getSubTotalOfCurrentWeek();
});
