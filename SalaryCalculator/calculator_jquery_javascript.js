    $(document).ready(function(){
        //principal variables
        var principleTitle1FinalAmount = 0;
        var principleE8SecondaryFinalAmount = 0;
        var principalHighestPriorityTotalAmount = 0;
        var pathwaysFinalAmount = 0;
        var topPerformingAmount = 0;
        var highGrowthAmount = 0;
        var enrollmentSupplmenetAmount = 0;
        var principleIncentivesTotalAmount = 0;
        //ap variables
        var apTitle1FinalAmount = 0;
        var apHighestPriorityFinalAmount = 0;
        var apPathwaysFinalAmount = 0;
        var apTopPerformingAmount = 0;
        var apHighGrowthAmount = 0;
        var apIncentivesTotalAmount = 0;
        var apE8SecondaryFinalAmount = 0;
        
        $("select").change(function(){
            $( "select option:selected").each(function(){
                if($(this).attr("value")=="principle"){
                    $(".ap").hide();
                    $(".principle").show();
                }
                if($(this).attr("value")=="ap"){
                    $(".principle").hide();
                    $(".ap").show();
                }
            });
        }).change();
        
/* Title 1 Principles */
        //Title 1 Principles Addition Logic
        $("#principle_title1_number_years").keyup(function() {
            var basePrincipleTitle1ElementaryNumberOfYears = 7000;
            var basePrincipleTitle1SecondaryNumberOfYears = 10000;
            
            var valueNumberOfYears = $("#principle_title1_number_years").val();
            
            var perYearIncentiveElementary = 1500; 
            var perYearIncentiveSecondary = 2000;
            var maxValueElementary = 13000;
            var maxValueSecondary = 18000;
            
            var totalElementary = (valueNumberOfYears * perYearIncentiveElementary) + basePrincipleTitle1ElementaryNumberOfYears; 
            var totalSecondary = (valueNumberOfYears * perYearIncentiveSecondary) + basePrincipleTitle1SecondaryNumberOfYears; 
            
            if($("#principle_title1_elementary").is(':checked')) {
                if (totalElementary > maxValueElementary) {
                    principleTitle1FinalAmount = 0;
                    $("#principle_title1_number_years_output").html("$" + commaSeparateNumber(maxValueElementary));
                    principleTitle1FinalAmount = maxValueElementary;
                } else {
                    principleTitle1FinalAmount = 0;
                    $("#principle_title1_number_years_output").html("$" + commaSeparateNumber(totalElementary));
                    principleTitle1FinalAmount = totalElementary;
                }
            }
            if($("#principle_title1_secondary").is(':checked')) {
                if (totalSecondary > maxValueSecondary) {
                    principleTitle1FinalAmount = 0;
                    $("#principle_title1_number_years_output").html("$" + commaSeparateNumber(maxValueSecondary));
                    principleTitle1FinalAmount = maxValueSecondary;
                } else {
                    principleTitle1FinalAmount = 0;
                    $("#principle_title1_number_years_output").html("$" + commaSeparateNumber(totalSecondary));
                    principleTitle1FinalAmount = totalSecondary;
                }
            }
            if($("#title1_elementary_600Less").is(':checked')) {   
                if (totalElementary > maxValueElementary) {
                    principleTitle1FinalAmount = 0;
                    $("#principle_title1_number_years_output").html("$" + commaSeparateNumber(maxValueElementary));
                    principleTitle1FinalAmount = maxValueElementary;
                } else {
                    principleTitle1FinalAmount = 0;
                    $("#principle_title1_number_years_output").html("$" + commaSeparateNumber(totalElementary));
                    principleTitle1FinalAmount = totalElementary;
                }
            }
            if($("#title1_elementary_600Plus").is(':checked')) {  
                if (totalSecondary > maxValueSecondary) {
                    principleTitle1FinalAmount = 0;
                    $("#principle_title1_number_years_output").html("$" + commaSeparateNumber(maxValueSecondary));
                    principleTitle1FinalAmount = maxValueSecondary;
                } else {
                    principleTitle1FinalAmount = 0;
                    $("#principle_title1_number_years_output").html("$" + commaSeparateNumber(totalSecondary));
                    principleTitle1FinalAmount = totalSecondary;
                }
            }
        });
        //Title1 secondary output
        $("#principle_title1_secondary").click(function() {
            if($(this).prop("checked") == false){
                $("#principle_title1_number_years_output").html(" ");
                $("#principle_title1_number_years").val(" ");
                principleTitle1FinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_title1_number_years_output").html("$10,000");
                principleTitle1FinalAmount = 10000;
            }
        });
        //title1 elementary output
        $('#principle_title1_elementary').click(function() {
            if($(this).prop("checked") == false){
                $("#principle_title1_number_years_output").html(" ");
                $("#principle_title1_number_years").val(" ");
                principleTitle1FinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_title1_number_years_output").html("$7,000");
                principleTitle1FinalAmount = 7000;
            }
        });
        //Title1 less than 600 students output
        $("#title1_elementary_600Less").click(function(){
            if($(this).prop("checked") == false){
                $("#principle_title1_number_years_output").html(" ");
                $("#principle_title1_number_years").val(" ");
                principleTitle1FinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_title1_number_years_output").html("$7,000");
                principleTitle1FinalAmount = 7000;
            }
        });
        //Title1 greater than 600 students output
        $("#title1_elementary_600Plus").click(function() {
            if($(this).prop("checked") == false){
                $("#principle_title1_number_years_output").html(" ");
                $("#principle_title1_number_years").val(" ");
                principleTitle1FinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_title1_number_years_output").html("$10,000");
                principleTitle1FinalAmount = 10000;
            }
        });
        // Check to see if either title1 or highest priority if checked 
        if (($("#principle_title1_selection_group").prop("checked") == false) && ($("#principle_highest_priority_selection_group").prop("checked") == false)
                                && ($("#principal_pathways_selection_group").prop("checked") == false)) {
            $('#principle_title1_elementary').attr('disabled', true);
            $('#principle_title1_secondary').attr('disabled', true);
            $('#principle_highest_priority_elementary').attr('disabled', true);
            $('#principle_highest_priority_secondary').attr('disabled', true);
            $('#principal_pathways_w_out_middle_school').attr('disabled', true);
            $('#principle_pathways_middle_school').attr('disabled', true);
            $('#principle_highest_priority_elementary_600Plus').attr('disabled', true);
            $('#principle_highest_priority_elementary_600Less').attr('disabled', true);
            $('#title1_elementary_600Plus').attr('disabled', true);
            $('#title1_elementary_600Less').attr('disabled', true);
            $('#principle_pathways_select').attr('disabled', true);
        }
        //if all checkboxes are false the totals output is over written
        $("#principle").on("change", function() {
            //console.log("detected on maybe");
            if (($("#principle_title1_selection_group").prop("checked") == false) && ($("#principle_highest_priority_selection_group").prop("checked") == false)
                                && ($("#principal_pathways_selection_group").prop("checked") == false) && ($("#principle_top_performing_blue").prop("checked") == false)
                                && ($("#principle_top_performing_green").prop("checked") == false) && ($("#principle_high_growth").prop("checked") == false)
                                && ($("#principle_1000_plus").prop("checked") == false) && ($("#principle_750-999").prop("checked") == false)) {

                $("#total_incentives_amount_output").html(" ");
                console.log("cleared total!");
            } 
        });
        
        //Title1 disable Highest-Priority and Pathways
        $('#principle_title1_selection_group').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_title1_elementary').attr('disabled', false);
                $('#principle_title1_secondary').attr('disabled', false);
                $('#principle_highest_priority_selection_group').attr('disabled', true);
                $('#principle_highest_priority_elementary').attr('disabled', true);
                $('#principle_highest_priority_secondary').attr('disabled', true);
                $('#principal_pathways_selection_group').attr('disabled',true);
                $('#principal_pathways_selection_group').attr('disabled', true);
                $("#principle_highest_priority_years_output").html(" ");
                $("#principle_highest_priority_number_years").val(" ");
                $('#principle_pathways_years_output').html(" ");
                $('#principle_pathways_number_years').val(" ");
                $('#title1_elementary_600Plus').attr('disabled', false);
                $('#title1_elementary_600Less').attr('disabled', false);
                principleE8SecondaryFinalAmount = 0;
                $('#principle_highest_priority_elementary').removeAttr('checked');
                $('#principle_highest_priority_secondary').removeAttr('checked');
            }
            if ($(this).prop('checked') == false) {
                $('#principle_title1_elementary').attr('disabled', true).removeAttr('checked');
                $('#principle_title1_secondary').attr('disabled', true).removeAttr('checked');
                $("#principle_title1_number_years_output").html(" ");
                $("#principle_title1_number_years").val(" ");
                principleTitle1FinalAmount = 0;
                $('#principle_highest_priority_selection_group').attr('disabled', false);
                $('#principal_pathways_selection_group').attr('disabled', false);
                $('#title1_elementary_600Less').attr('disabled',true).removeAttr('checked');    
                $('#title1_elementary_600Plus').attr('disabled',true).removeAttr('checked');
            }
        });
        //Highest-priority disable Title1 and Pathways
        $('#principle_highest_priority_selection_group').change(function() {
            if ($(this).is(":checked")) {
                $('#principle_highest_priority_elementary').attr('disabled', false);
                $('#principle_highest_priority_secondary').attr('disabled', false);
                $('#principle_title1_selection_group').attr("disabled",true);
                $('#principle_title1_elementary').attr('disabled', true);
                $('#principle_title1_secondary').attr('disabled', true);
                $('#principal_pathways_selection_group').attr('disabled',true);
                $("#principle_title1_number_years_output").html(" ");
                $("#principle_title1_number_years").val(" ");
                $('#principle_pathways_years_output').html(" ");
                $('#principle_pathways_number_years').val(" ");
                principleTitle1FinalAmount = 0;
                $('#principle_title1_elementary').removeAttr('checked');
                $('#principle_title1_secondary').removeAttr('checked');
                $('#principle_highest_priority_elementary_600Less').attr('disabled',false);    
                $('#principle_highest_priority_elementary_600Plus').attr('disabled',false);
            }
            if ($(this).prop('checked') == false) {
                $('#principle_highest_priority_elementary').attr('disabled', true).removeAttr('checked');
                $('#principle_highest_priority_secondary').attr('disabled', true).removeAttr('checked');
                $("#principle_highest_priority_years_output").html(" ");
                $("#principle_highest_priority_number_years").val(" ");
                principleE8SecondaryFinalAmount = 0;
                $('#principle_title1_selection_group').attr('disabled',false);
                $('#principal_pathways_selection_group').attr('disabled', false);
                $('#principle_highest_priority_elementary_600Less').attr('disabled',true).removeAttr('checked');    
                $('#principle_highest_priority_elementary_600Plus').attr('disabled',true).removeAttr('checked');
            }
        });
        //Disable Title1 and Pathways
        $('#principal_pathways_selection_group').change(function() {
            if ($(this).is(":checked")) {
                $('#principal_pathways_selection_group').attr('disabled', false);
                $('#principle_title1_selection_group').attr('disabled', true);
                $('#principle_title1_elementary').attr('disabled', true);
                $('#principle_title1_secondary').attr('disabled', true);
                $('#principle_highest_priority_selection_group').attr('disabled', true);
                $('#principle_highest_priority_elementary').attr('disabled', true);
                $('#principle_highest_priority_secondary').attr('disabled', true);
                $("#principle_title1_number_years_output").html(" ");
                $("#principle_title1_number_years").val(" ");
                $("#principle_highest_priority_years_output").html(" ");
                $("#principle_highest_priority_number_years").val(" ");
                $('#principle_title1_elementary').removeAttr('checked');
                $('#principle_title1_secondary').removeAttr('checked');
                $('#principle_highest_priority_elementary').removeAttr('checked');
                $('#principle_highest_priority_secondary').removeAttr('checked');
                $('#principal_pathways_w_out_middle_school').attr('disabled', false);
                $('#principle_pathways_middle_school').attr('disabled', false);
            }
            
            if ($(this).prop('checked') == false) {
               // $('#principal_pathways_selection_group').attr('disabled', true).removeAttr('checked');
                $('#principal_pathways_w_out_middle_school').attr('disabled', true).removeAttr('checked');
                $('#principle_pathways_middle_school').attr('disabled',true).removeAttr('checked');
                $('#principle_pathways_years_output').html(" ");
                $('#principle_pathways_number_years').val(" ");
                pathwaysFinalAmount = 0;
                $('#principle_title1_selection_group').attr('disabled',false);
                $('#principle_highest_priority_selection_group').attr('disabled', false);
            }
        });
        
        //hp elementary checked disable 600less, 600plus, hp secondary
        $('#principle_highest_priority_elementary').change(function() {
            if ($(this).is(':checked')) {
                $('#principle_highest_priority_elementary_600Less').attr('disabled',true);  
                $('#principle_highest_priority_elementary_600Plus').attr('disabled',true); 
                $('#principle_highest_priority_secondary').attr('disabled',true); 
            }
            if ($(this).prop('checked') == false) {
                $('#principle_highest_priority_elementary_600Less').attr('disabled',false);    
                $('#principle_highest_priority_elementary_600Plus').attr('disabled',false); 
                $('#principle_highest_priority_secondary').attr('disabled',false); 
            }
        });
        //hp 600less checked disabled 600plus, elementary, secondary
        $('#principle_highest_priority_elementary_600Less').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_highest_priority_elementary_600Plus').attr('disabled',true);
                $('#principle_highest_priority_secondary').attr('disabled',true); 
                $('#principle_highest_priority_elementary').attr('disabled',true);
            }
            if ($(this).prop('checked') == false)  {
                $('#principle_highest_priority_elementary_600Plus').attr('disabled', false);
                $('#principle_highest_priority_secondary').attr('disabled',false); 
                $('#principle_highest_priority_elementary').attr('disabled',false);
            }
        });
        //hp 600plus checked disabled 600less, elementary, secondary
        $('#principle_highest_priority_elementary_600Plus').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_highest_priority_elementary_600Less').attr('disabled',true);
                $('#principle_highest_priority_secondary').attr('disabled',true); 
                $('#principle_highest_priority_elementary').attr('disabled',true);
            }
            if ($(this).prop('checked') == false)  {
                $('#principle_highest_priority_elementary_600Less').attr('disabled', false);
                $('#principle_highest_priority_secondary').attr('disabled',false); 
                $('#principle_highest_priority_elementary').attr('disabled',false);
            }
        });
        //hp secondary disables elementary, secondary,600plus, 600less
        $('#principle_highest_priority_secondary').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_highest_priority_elementary_600Less').attr('disabled', true);
                $('#principle_highest_priority_elementary_600Plus').attr('disabled',true); 
                $('#principle_highest_priority_elementary').attr('disabled',true);
            }
            if ($(this).prop('checked') == false) {
                $('#principle_highest_priority_elementary_600Less').attr('disabled', false);
                $('#principle_highest_priority_elementary_600Plus').attr('disabled',false); 
                $('#principle_highest_priority_elementary').attr('disabled',false);
            }
        });
           
        // principal title1 elementary checked disable secondary, 600less, 600plus 
        $('#principle_title1_elementary').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_title1_secondary').attr('disabled', true);
                $('#title1_elementary_600Less').attr('disabled', true);
                $('#title1_elementary_600Plus').attr('disabled', true);
            } else {
                $('#principle_title1_secondary').attr('disabled', false);
                $('#title1_elementary_600Less').attr('disabled', false);
                $('#title1_elementary_600Plus').attr('disabled', false);
            }
        });
        // principal title1 secondary disable elementary, 600Less, 600Plus
        $('#principle_title1_secondary').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_title1_elementary').attr('disabled', true);
                $('#title1_elementary_600Less').attr('disabled', true);
                $('#title1_elementary_600Plus').attr('disabled', true);
            } else {
                $('#principle_title1_elementary').attr('disabled', false);
                $('#title1_elementary_600Less').attr('disabled', false);
                $('#title1_elementary_600Plus').attr('disabled', false);
            }
        });
        //princiapl title1 600Less disable 600plus, elementary, secondary
        $('#title1_elementary_600Less').change(function() {
            if ($(this).is(":checked")) {
                $('#principle_title1_secondary').attr('disabled', true);
                $('#principle_title1_elementary').attr('disabled', true);
                $('#title1_elementary_600Plus').attr('disabled', true);
            } else {
                $('#title1_elementary_600Plus').attr('disabled', false);
                $('#principle_title1_elementary').attr('disabled', false);
                $('#principle_title1_secondary').attr('disabled', false);
            }            
        });
        //principal title1 600pluss disable 600Less, elementary, secondary
        $('#title1_elementary_600Plus').change(function() {
            if ($(this).is(":checked")) {
                $('#principle_title1_secondary').attr('disabled', true);
                $('#principle_title1_elementary').attr('disabled', true);
                $('#title1_elementary_600Less').attr('disabled', true);
            } else {
                $('#title1_elementary_600Less').attr('disabled', false);
                $('#principle_title1_elementary').attr('disabled', false);
                $('#principle_title1_secondary').attr('disabled', false);
            }
        });
        
        // enable number of years to enable or disable
        $('#principle_title1_elementary').change(function () {
            if ($(this).is(":checked")) {
                $("#principle_title1_number_years").removeAttr('disabled');
            } else {
                $("#principle_title1_number_years").attr('disabled','disabled');
            }
        });
        // enable number of years to enable or disable
        $('#principle_title1_secondary').change(function () {
            if ($(this).is(":checked")) {
                $("#principle_title1_number_years").removeAttr('disabled');
            } else {
                $("#principle_title1_number_years").attr('disabled','disabled');
            }
        });
        // enable number of years to enable or disable
        $('#title1_elementary_600Less').change(function () {
            if ($(this).is(":checked")) {
                $("#principle_title1_number_years").removeAttr('disabled');
            } else {
                $("#principle_title1_number_years").attr('disabled','disabled');
            }
        });
        // enable number of years to enable or disable
        $('#title1_elementary_600Plus').change(function () {
            if ($(this).is(":checked")) {
                $("#principle_title1_number_years").removeAttr('disabled');
            } else {
                $("#principle_title1_number_years").attr('disabled','disabled');
            }
        });
        
        //number validation code title1 years input
        $("#principle_title1_number_years").bind("keydown", function (event) {
            $("#errmsgt1").html("");
            if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                    // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) || 
            // Allow: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                  // let it happen, don't do anything
                  return;
            } else {
                // Ensure that it is a number and stop the keypress
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                    event.preventDefault();
                    $("#errmsgt1").html("Numbers only please");
                }
            }
        });
    
/* Highest Priority Principles*/            
        
        //Highest-Priority Principles Addition Logic
        $("#principle_highest_priority_number_years").keyup(function() {
            var baseIncentivePrincipleHighestPriorityElementary = 17000;
            var baseIncentivePrincipleHighestPrioritySecondaryNumber = 20000;
            
            var valueNumberOfYears = $("#principle_highest_priority_number_years").val();
            
            var perYearIncentiveElementary = 2000; 
            var perYearIncentiveSecondary = 2500;
            var maxValueElementary = 25000;
            var maxValueSecondary = 30000;
            
            var totalElementary = (valueNumberOfYears * perYearIncentiveElementary) + baseIncentivePrincipleHighestPriorityElementary; 
            var totalSecondary = (valueNumberOfYears * perYearIncentiveSecondary) + baseIncentivePrincipleHighestPrioritySecondaryNumber; 
            //totals 600Less
            if($("#principle_highest_priority_elementary_600Less").is(':checked')) {  
                if (totalElementary > maxValueElementary) {
                    $("#principle_highest_priority_years_output").html("$" + commaSeparateNumber(maxValueElementary));
                    principalHighestPriorityTotalAmount = maxValueElementary;
                } else {
                    $("#principle_highest_priority_years_output").html("$" + commaSeparateNumber(totalElementary));
                    principalHighestPriorityTotalAmount = totalElementary;
                }
            }
            //totals elementary
            if($("#principle_highest_priority_elementary").is(':checked')) {  
                if (totalElementary > maxValueElementary) {
                    $("#principle_highest_priority_years_output").html("$" + commaSeparateNumber(maxValueElementary));
                    principalHighestPriorityTotalAmount = maxValueElementary;
                } else {
                    $("#principle_highest_priority_years_output").html("$" + commaSeparateNumber(totalElementary));
                    principalHighestPriorityTotalAmount = totalElementary;
                }
            }
            //totals 600PLus
            if($("#principle_highest_priority_elementary_600Plus").is(':checked')) {
                if (totalSecondary > maxValueSecondary) {
                    $("#principle_highest_priority_years_output").html("$" + commaSeparateNumber(maxValueSecondary));
                    principalHighestPriorityTotalAmount = maxValueSecondary;
                } else {
                    $("#principle_highest_priority_years_output").html("$" + commaSeparateNumber(totalSecondary));
                    principalHighestPriorityTotalAmount = totalSecondary;
                }
            }
            //totals secondary
            if($("#principle_highest_priority_secondary").is(':checked')) {
                if (totalSecondary > maxValueSecondary) {
                    $("#principle_highest_priority_years_output").html("$" + commaSeparateNumber(maxValueSecondary));
                    principalHighestPriorityTotalAmount = maxValueSecondary;
                } else {
                    $("#principle_highest_priority_years_output").html("$" + commaSeparateNumber(totalSecondary));
                    principalHighestPriorityTotalAmount = totalSecondary;
                }
            }
        });
        //Highest-Priority Principles output 
        $("#principle_highest_priority_secondary").click(function() {
            if($(this).prop("checked") == false){
                $("#principle_highest_priority_years_output").html(" ");
                $("#principle_highest_priority_number_years").val(" ");
                principalHighestPriorityTotalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_highest_priority_years_output").html("$20,000");
                principalHighestPriorityTotalAmount = 20000;
            }
        });
        //highest-priority elementary output
        $('#principle_highest_priority_elementary').click(function() {
           if($(this).prop("checked") == false){
                $("#principle_highest_priority_years_output").html(" ");
                $("#principle_highest_priority_number_years").val(" ");
                principalHighestPriorityTotalAmount = 0;
           }
           if($(this).prop("checked") == true){
                $("#principle_highest_priority_years_output").html("$17,000");
                principalHighestPriorityTotalAmount = 17000; 
           }
        });
        //Highest-Priority Principles output 
        $("#principle_highest_priority_elementary_600Plus").click(function() {
            if($(this).prop("checked") == false){
                $("#principle_highest_priority_years_output").html(" ");
                $("#principle_highest_priority_number_years").val(" ");
                principalHighestPriorityTotalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_highest_priority_years_output").html("$20,000");
                principalHighestPriorityTotalAmount = 20000;
            }
        });
        //Highest-Priority Principles output 
        $("#principle_highest_priority_elementary_600Less").click(function(){
            if($(this).prop("checked") == false){
                $("#principle_highest_priority_years_output").html(" ");
                $("#principle_highest_priority_number_years").val(" ");
                principalHighestPriorityTotalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_highest_priority_years_output").html("$17,000");
                principalHighestPriorityTotalAmount = 17000;
            }
        });  
        // enable number of years to enable or disable
        $('#principle_highest_priority_elementary').change(function () {
            if ($(this).is(":checked")) {
                $("#principle_highest_priority_number_years").removeAttr('disabled');
            } else {
                $("#principle_highest_priority_number_years").attr('disabled','disabled');
            }
        });
        // enable number of years to enable or disable
        $('#principle_highest_priority_secondary').change(function () {
            if ($(this).is(":checked")) {
                $("#principle_highest_priority_number_years").removeAttr('disabled');
            } else {
                $("#principle_highest_priority_number_years").attr('disabled','disabled');
            }
        });
        // enable number of years to enable or disable
        $('#principle_highest_priority_elementary_600Less').change(function () {
            if ($(this).is(":checked")) {
                $("#principle_highest_priority_number_years").removeAttr('disabled');
            } else {
                $("#principle_highest_priority_number_years").attr('disabled','disabled');
            }
        });
        // enable number of years to enable or disable
        $('#principle_highest_priority_elementary_600Plus').change(function () {
            if ($(this).is(":checked")) {
                $("#principle_highest_priority_number_years").removeAttr('disabled');
            } else {
                $("#principle_highest_priority_number_years").attr('disabled','disabled');
            }
        });
        
        //number validation for input years
        $("#principle_highest_priority_number_years").bind("keydown", function (event) {
            $("#errmsghp").html("");
            if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                    // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) || 
     
            // Allow: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                  // let it happen, don't do anything
                  return;
            } else {
                // Ensure that it is a number and stop the keypress
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                    event.preventDefault();
                    $("#errmsghp").html("Numbers only please");
                }
            }
        });
        
/* Pathways Principles*/        
        
        /* Pathways logic */
        $("#principle_pathways_number_years").keyup(function() {
            var baseIncentivePathways = 8000;
            var val = $("#principle_pathways_number_years").val();    
            var perYearIncentive = 2000; 
            var maxValue = 16000;
            
            var total = (val * perYearIncentive) + baseIncentivePathways; 
            
            if (total > maxValue) {
                $("#principle_pathways_years_output").html("$" + commaSeparateNumber(maxValue));
                pathwaysFinalAmount = maxValue;
            } else {
                $("#principle_pathways_years_output").html("$" + commaSeparateNumber(total));
                pathwaysFinalAmount = total;
            }    
        }); 
        
        $("#principal_pathways_w_out_middle_school").click(function() { 
            if($(this).prop("checked") == false){
                $("#principle_pathways_years_output").html(" ");
                $("#principle_pathways_number_years").val(" ");
                pathwaysFinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_pathways_years_output").html("$8,000");
                pathwaysFinalAmount = 8000;
            }
        });
        
          $("#principle_pathways_middle_school").click(function() { 
            if($(this).prop("checked") == false){
                $("#principle_pathways_years_output").html(" ");
                $("#principle_pathways_number_years").val(" ");
                pathwaysFinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_pathways_years_output").html("$8,000");
                pathwaysFinalAmount = 8000;
            }
        });
        
        $('#principle_pathways_middle_school').change(function() {
            if($(this).prop("checked") == false){
                $('#principle_pathways_select').attr('disabled', true);
                $('#principal_pathways_w_out_middle_school').attr('disabled', false);
                $("#principle_pathways_number_years").attr('disabled','disabled');
            }
            if($(this).prop("checked") == true){
                $('#principle_pathways_select').attr('disabled', false);
                $('#principal_pathways_w_out_middle_school').attr('disabled', true);
                $("#principle_pathways_number_years").removeAttr('disabled');
            }
        });
        
        $('#principal_pathways_w_out_middle_school').change(function() {
            if($(this).prop("checked") == false){
                $('#principle_pathways_middle_school').attr('disabled', false);
                $("#principle_pathways_number_years").attr('disabled','disabled');
            }
            if($(this).prop("checked") == true){
                $('#principle_pathways_middle_school').attr('disabled', true);
                $("#principle_pathways_number_years").removeAttr('disabled');
            }
        });
        
        $("#principle_pathways_number_years").bind("keydown", function (event) {
            $("#errmsgpath").html("");
            if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                    // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) || 
     
            // Allow: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                  // let it happen, don't do anything
                  return;
            } else {
                // Ensure that it is a number and stop the keypress
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                    event.preventDefault();
                    $("#errmsgpath").html("Numbers only please");
                }
            }
        });
        
        
/* Top-Performing Principles */
        /* Disable check boxes when box is checked */
        $('#principle_top_performing_blue').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_top_performing_green').attr('disabled', true);
            } else {
                $('#principle_top_performing_green').attr('disabled', false);
            }
        });
        /* Disable check boxes when box is checked */
        $('#principle_top_performing_green').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_top_performing_blue').attr('disabled', true);
            } else {
                $('#principle_top_performing_blue').attr('disabled', false);
            }
        });
        $("#principle_top_performing_blue").click(function(){
            if($(this).prop("checked") == false){
                $("#principle_top_performing_output").html(" ");
                topPerformingAmount = 0;
            }
            
            if($(this).prop("checked") == true){
                $("#principle_top_performing_output").html("$4,000");
                topPerformingAmount = 4000;
            }
        });      
        $("#principle_top_performing_green").click(function() {
            if($(this).prop("checked") == false){
                $("#principle_top_performing_output").html(" ");
                topPerformingAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_top_performing_output").html("$3,000");
                topPerformingAmount = 3000;
            }
        });
        
/* Enrollment Supplment */
        /* Disable check boxes when box is checked */
        $('#principle_1000_plus').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_750-999').attr('disabled', true);
            } else {
                $('#principle_750-999').attr('disabled', false);
            }
        });
        /* Disable check boxes when box is checked */
        $('#principle_750-999').change(function () {
            if ($(this).is(":checked")) {
                $('#principle_1000_plus').attr('disabled', true);
            } else {
                $('#principle_1000_plus').attr('disabled', false);
            }
        });
        $("#principle_1000_plus").click(function(){
            if($(this).prop("checked") == false){
                $("#principle_enrollment_supplement_output").html(" ");
                enrollmentSupplmenetAmount = 0;
            }
            
            if($(this).prop("checked") == true){
                $("#principle_enrollment_supplement_output").html("$5,000");
                enrollmentSupplmenetAmount = 5000;
            }
        });      
        $("#principle_750-999").click(function() {
            if($(this).prop("checked") == false){
                $("#principle_enrollment_supplement_output").html(" ");
                enrollmentSupplmenetAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_enrollment_supplement_output").html("$3,000");
                enrollmentSupplmenetAmount = 3000;
            }
        });
        
/* High-Growth */
        $("#principle_high_growth").click(function() {
            if($(this).prop("checked") == false){
                $("#principle_high_growth_output").html(" ");
                highGrowthAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#principle_high_growth_output").html("$7,500");
                highGrowthAmount = 7500;
            }
        });
        
/* Calculate Total Principle */        
        $("#calculate_total").click(function() {
            principleIncentivesTotalAmount = (principleTitle1FinalAmount + principleE8SecondaryFinalAmount + principalHighestPriorityTotalAmount
                                            + pathwaysFinalAmount + topPerformingAmount + highGrowthAmount + enrollmentSupplmenetAmount);
            $("#total_incentives_amount_output").html("$" + commaSeparateNumber(principleIncentivesTotalAmount));
        });
/* Reset Principle */     
        $("#clear_form").click(function(){
            $("#principle div").find('#principle_title1_number_years_output,#principle_highest_priority_years_output,#principle_pathways_years_output,#principle_top_performing_output,#principle_high_growth_output,#principle_enrollment_supplement_output,#total_incentives_amount_output')
                        .html(" ");
            $('#principle').find('input:text, select').val('');
            $('#principle').find('input:checkbox').prop('checked', false).attr('disabled', false);
            //disable sub checkboxes of Highest-Priority, Pathways, Title1
            $('#principle_title1_elementary').attr('disabled', true);
            $('#principle_title1_secondary').attr('disabled', true);
            $('#principle_highest_priority_elementary').attr('disabled', true);
            $('#principle_highest_priority_secondary').attr('disabled', true);
            $('#principal_pathways_w_out_middle_school').attr('disabled', true);
            $('#principle_pathways_middle_school').attr('disabled', true);
            $('#principle_highest_priority_elementary_600Plus').attr('disabled', true);
            $('#principle_highest_priority_elementary_600Less').attr('disabled', true);
            $('#title1_elementary_600Plus').attr('disabled', true);
            $('#title1_elementary_600Less').attr('disabled', true);
            $('#principle_pathways_select').attr('disabled', true);
            
            principleTitle1FinalAmount = 0;
            principleE8SecondaryFinalAmount = 0;
            principalHighestPriorityTotalAmount = 0;
            pathwaysFinalAmount = 0;
            topPerformingAmount = 0;
            highGrowthAmount = 0;
            enrollmentSupplmenetAmount = 0;
            principleIncentivesTotalAmount = 0;
            
        });
        
/* Assistant Principle */
    
    // Check to see if either title1 or highest priority if checked 
        if (($("#ap_title1_selection_group").prop("checked") == false) && ($("#ap_highest_priority_selection_group").prop("checked") == false) && ($("#ap_pathways_selection_group").prop("checked") == false)) {
            $('#ap_title1_elementary').attr('disabled', true);
            $('#ap_title1_secondary').attr('disabled', true);
            $('#ap_highest_priority_elementary').attr('disabled', true);
            $('#ap_highest_priority_secondary').attr('disabled', true);
            $('#ap_pathways').attr('disabled', true);
            $("#ap_title1_elementary_600Less").attr('disabled', true);
            $("#ap_title1_elementary_600Plus").attr('disabled', true);
            $("#ap_highest_priority_elementary_600Less").attr('disabled', true);
            $("#ap_highest_priority_elementary_600Plus").attr('disabled', true);
        } 
        
        //Disable Highest-Priority when checked
        $('#ap_title1_selection_group').change(function () {
            if ($(this).is(":checked")) {
                $('#ap_title1_elementary').attr('disabled', false);
                $('#ap_title1_secondary').attr('disabled', false);
                $("#ap_title1_elementary_600Less").attr('disabled', false);
                $("#ap_title1_elementary_600Plus").attr('disabled', false);
                $('#ap_highest_priority_selection_group').attr('disabled', true);
                $('#ap_highest_priority_elementary').attr('disabled', true).removeAttr('checked');
                $('#ap_highest_priority_secondary').attr('disabled', true).removeAttr('checked');
                $("#ap_highest_priority_elementary_600Less").attr('disabled', true).removeAttr('checked');
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', true).removeAttr('checked');
                $('#ap_pathways').attr('disabled', true).removeAttr('checked');
                $('#ap_pathways_selection_group').attr('disabled', true);
                $("#ap_highest_output").html(" ");
                apHighestPriorityFinalAmount = 0;
                //$('#ap_highest_priority_elementary').removeAttr('checked');
                //$('#ap_highest_priority_secondary').removeAttr('checked');
            }
    
            if ($(this).prop('checked') == false) {
                $('#ap_title1_elementary').attr('disabled', true).removeAttr('checked');
                $('#ap_title1_secondary').attr('disabled', true).removeAttr('checked');
                $("#ap_title1_elementary_600Less").attr('disabled', true).removeAttr('checked');
                $("#ap_title1_elementary_600Plus").attr('disabled', true).removeAttr('checked');
                $("#ap_title1_output").html(" ");
                apTitle1FinalAmount = 0;
                $('#ap_highest_priority_selection_group').attr('disabled', false);
                $('#ap_pathways_selection_group').attr('disabled', false);
            }
        });
        
        //Disable Highest-Priority when checked
        $('#ap_highest_priority_selection_group').change(function () {
            if ($(this).is(":checked")) {
                $('#ap_highest_priority_elementary').attr('disabled', false); 
                $('#ap_highest_priority_secondary').attr('disabled', false);
                $("#ap_highest_priority_elementary_600Less").attr('disabled', false); 
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', false); 
                $('#ap_title1_selection_group').attr('disabled', true);
                $('#ap_title1_elementary').attr('disabled', true).removeAttr('checked');
                $('#ap_title1_secondary').attr('disabled', true).removeAttr('checked');
                $("#ap_title1_elementary_600Less").attr('disabled', true).removeAttr('checked');
                $("#ap_title1_elementary_600Plus").attr('disabled', true).removeAttr('checked');
                $('#ap_pathways').attr('disabled', true).removeAttr('checked');
                $('#ap_pathways_selection_group').attr('disabled', true);
                $("#ap_title1_output").html(" ");
                apTitle1FinalAmount = 0;
                //$('#ap_title1_elementary').removeAttr('checked');
                //$('#ap_title1_secondary').removeAttr('checked');
            }
            
            if ($(this).prop('checked') == false) {
                $('#ap_highest_priority_elementary').attr('disabled', true).removeAttr('checked');
                $('#ap_highest_priority_secondary').attr('disabled', true).removeAttr('checked');
                $("#ap_highest_priority_elementary_600Less").attr('disabled', true).removeAttr('checked'); 
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', true).removeAttr('checked'); 
                $("#ap_highest_output").html(" ");
                apHighestPriorityFinalAmount = 0;  
                $('#ap_title1_selection_group').attr('disabled', false);
                $('#ap_pathways_selection_group').attr('disabled', false);
            }
        });
        
        //Disable pathways when checked
        $('#ap_pathways_selection_group').change(function () {
            if ($(this).is(":checked")) {
                $('#ap_pathways').attr('disabled', false);
                $('#ap_highest_priority_selection_group').attr('disabled', true).removeAttr('checked'); 
                $('#ap_highest_priority_elementary').attr('disabled', true).removeAttr('checked');   
                $('#ap_highest_priority_secondary').attr('disabled', true).removeAttr('checked');
                $("#ap_highest_priority_elementary_600Less").attr('disabled', true).removeAttr('checked');
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', true).removeAttr('checked');
                $('#ap_title1_selection_group').attr('disabled', true).removeAttr('checked');
                $('#ap_title1_elementary').attr('disabled', true).removeAttr('checked');
                $('#ap_title1_secondary').attr('disabled', true).removeAttr('checked');
                $("#ap_title1_elementary_600Less").attr('disabled', true).removeAttr('checked');
                $("#ap_title1_elementary_600Plus").attr('disabled', true).removeAttr('checked');
                $("#ap_pathways_output").html(" ");
                apPathwaysFinalAmount = 0;
                //$('#ap_title1_elementary').removeAttr('checked');
                //$('#ap_title1_secondary').removeAttr('checked');
                //$('#ap_highest_priority_elementary').removeAttr('checked');
                //$('#ap_highest_priority_secondary').removeAttr('checked');
            }
            
            if ($(this).prop('checked') == false) {
                $('#ap_pathways').attr('disabled', true).removeAttr('checked');
                $("#ap_pathways_output").html(" ");
                apPathwaysFinalAmount = 0;  
                $('#ap_title1_selection_group').attr('disabled', false);
                $('#ap_highest_priority_selection_group').attr('disabled',false); 
            }
        });
       
    /* AP Title 1 */
        $("#ap_title1_elementary").click(function(){
            if($(this).prop("checked") == false){
                $("#ap_title1_output").html(" ");
                apTitle1FinalAmount = 0;
            }
            
            if($(this).prop("checked") == true){
                $("#ap_title1_output").html("$5,250");
                apTitle1FinalAmount = 5250;
            }
        });      
        $("#ap_title1_elementary_600Less").click(function(){
            if($(this).prop("checked") == false){
                $("#ap_title1_output").html(" ");
                apTitle1FinalAmount = 0;
            }
            
            if($(this).prop("checked") == true){
                $("#ap_title1_output").html("$5,250");
                apTitle1FinalAmount = 5250;
            }
        });    
        $("#ap_title1_secondary").click(function() {
            if($(this).prop("checked") == false){
                $("#ap_title1_output").html(" ");
                apE8SecondaryFinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#ap_title1_output").html("$7,500");
                apE8SecondaryFinalAmount = 7500;
            }
        });
        $("#ap_title1_elementary_600Plus").click(function() {
            if($(this).prop("checked") == false){
                $("#ap_title1_output").html(" ");
                apE8SecondaryFinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#ap_title1_output").html("$7,500");
                apE8SecondaryFinalAmount = 7500;
            }
        });
        
        /* Disable check boxes when box is checked */
        $('#ap_title1_elementary').change(function () {
            if ($(this).is(":checked")) {
                $('#ap_title1_secondary').attr('disabled', true);
                $("#ap_title1_elementary_600Plus").attr('disabled', true);
                $("#ap_title1_elementary_600Less").attr('disabled', true);
            } else {
                $('#ap_title1_secondary').attr('disabled', false);
                $("#ap_title1_elementary_600Plus").attr('disabled', false);
                $("#ap_title1_elementary_600Less").attr('disabled', false);
            }
        });
        /* Disable check boxes when box is checked */
        $('#ap_title1_secondary').change(function () {
            if ($(this).is(":checked")) {
                $('#ap_title1_elementary').attr('disabled', true);
                $("#ap_title1_elementary_600Plus").attr('disabled', true);
                $("#ap_title1_elementary_600Less").attr('disabled', true);
            } else {
                $('#ap_title1_elementary').attr('disabled', false);
                $("#ap_title1_elementary_600Plus").attr('disabled', false);
                $("#ap_title1_elementary_600Less").attr('disabled', false);
            }
        });
        /* Disable check boxes when box is checked */
        $("#ap_title1_elementary_600Less").change(function () {
            if ($(this).is(":checked")) {
                $("#ap_title1_elementary_600Plus").attr('disabled', true);
                $('#ap_title1_secondary').attr('disabled', true);
                $('#ap_title1_elementary').attr('disabled', true);
            } else {
                $("#ap_title1_elementary_600Plus").attr('disabled', false);
                $('#ap_title1_secondary').attr('disabled', false);
                $('#ap_title1_elementary').attr('disabled', false);
            }
        });
        /* Disable check boxes when box is checked */
        $("#ap_title1_elementary_600Plus").change(function () {
            if ($(this).is(":checked")) {
                $("#ap_title1_elementary_600Less").attr('disabled', true);
                $('#ap_title1_secondary').attr('disabled', true);
                $('#ap_title1_elementary').attr('disabled', true);
            } else {
                $("#ap_title1_elementary_600Less").attr('disabled', false);
                $('#ap_title1_secondary').attr('disabled', false);
                $('#ap_title1_elementary').attr('disabled', false);
            }
        });
       
/* AP Highest-Priority   */
        $("#ap_highest_priority_elementary_600Less").click(function() {
           if($(this).prop("checked") == false){
                $("#ap_highest_output").html(" ");
                apHighestPriorityFinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#ap_highest_output").html("$10,000");
                apHighestPriorityFinalAmount = 10000;
            }
        });
        $("#ap_highest_priority_elementary_600Plus").click(function() {
            if($(this).prop("checked") == false){
                $("#ap_highest_output").html(" ");
                apHighestPriorityFinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#ap_highest_output").html("$12,000");
                apHighestPriorityFinalAmount = 12000;
            }
        });
        $("#ap_highest_priority_elementary").click(function(){
            if($(this).prop("checked") == false){
                $("#ap_highest_output").html(" ");
                apHighestPriorityFinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#ap_highest_output").html("$10,000");
                apHighestPriorityFinalAmount = 10000;
            }
        });     
        $("#ap_highest_priority_secondary").click(function() {
            if($(this).prop("checked") == false){
                $("#ap_highest_output").html(" ");
                apHighestPriorityFinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#ap_highest_output").html("$12,000");
                apHighestPriorityFinalAmount = 12000;
            }
        });
        
        /* Disable check boxes when box is checked */
        $("#ap_highest_priority_elementary_600Less").change(function() {
            if ($(this).is(":checked")) {
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', true);
                $('#ap_highest_priority_elementary').attr('disabled', true);
                $('#ap_highest_priority_secondary').attr('disabled', true);
            } else {
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', false);
                $('#ap_highest_priority_elementary').attr('disabled', false);
                $('#ap_highest_priority_secondary').attr('disabled', false);
            }
        });
        /* Disable check boxes when box is checked */
        $("#ap_highest_priority_elementary_600Plus").change(function() {
            if ($(this).is(":checked")) {
                $("#ap_highest_priority_elementary_600Less").attr('disabled', true);
                $('#ap_highest_priority_elementary').attr('disabled', true);
                $('#ap_highest_priority_secondary').attr('disabled', true);
            } else {
                $("#ap_highest_priority_elementary_600Less").attr('disabled', false);
                $('#ap_highest_priority_elementary').attr('disabled', false);
                $('#ap_highest_priority_secondary').attr('disabled', false);
            }
        });
        /* Disable check boxes when box is checked */
        $('#ap_highest_priority_elementary').change(function () {
            if ($(this).is(":checked")) {
                $('#ap_highest_priority_secondary').attr('disabled', true);
                $("#ap_highest_priority_elementary_600Less").attr('disabled', true);
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', true);
            } else {
                $('#ap_highest_priority_secondary').attr('disabled', false);
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', false);
                $("#ap_highest_priority_elementary_600Less").attr('disabled', false);
            }
        });
        /* Disable check boxes when box is checked */
        $('#ap_highest_priority_secondary').change(function () {
            if ($(this).is(":checked")) {
                $('#ap_highest_priority_elementary').attr('disabled', true);
                $("#ap_highest_priority_elementary_600Less").attr('disabled', true);
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', true);
            } else {
                $('#ap_highest_priority_elementary').attr('disabled', false);
                $("#ap_highest_priority_elementary_600Plus").attr('disabled', false);
                $("#ap_highest_priority_elementary_600Less").attr('disabled', false);
            }
        });
       
/* AP Pathways */
        $("#ap_pathways_selection_group").click(function() {
            if($(this).prop("checked") == false){
                $("#ap_pathways_output").html(" ");
                apPathwaysFinalAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#ap_pathways_output").html("$6,000");
                apPathwaysFinalAmount = 6000;
            }
        });
        
/* AP Top-Performing */
        /* Disable check boxes when box is checked */
        $('#ap_top_performing_blue').change(function () {
            if ($(this).is(":checked")) {
                $('#ap_top_performing_green').attr('disabled', true);
            } else {
                $('#ap_top_performing_green').attr('disabled', false);
            }
        });
        /* Disable check boxes when box is checked */
        $('#principle_top_performing_green').change(function () {
            if ($(this).is(":checked")) {
                $('#ap_top_performing_blue').attr('disabled', true);
            } else {
                $('#ap_top_performing_blue').attr('disabled', false);
            }
        });
        
        $("#ap_top_performing_blue").click(function(){
            if($(this).prop("checked") == false){
                $("#ap_top_performing_output").html(" ");
                apTopPerformingAmount = 0;
            }
            
            if($(this).prop("checked") == true){
                $("#ap_top_performing_output").html("$3,000");
                apTopPerformingAmount = 3000;
            }
        });      
      
        $("#ap_top_performing_green").click(function() {
            if($(this).prop("checked") == false){
                $("#ap_top_performing_output").html(" ");
                apTopPerformingAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#ap_top_performing_output").html("$2,250");
                apTopPerformingAmount = 2250;
            }
        });

/* AP High-Growth */
        $("#ap_high_growth").click(function() {
            if($(this).prop("checked") == false){
                $("#ap_high_growth_output").html(" ");
                apHighGrowthAmount = 0;
            }
            if($(this).prop("checked") == true){
                $("#ap_high_growth_output").html("$5,625");
                apHighGrowthAmount = 5625;
            }
        });
             

/* Calculate Total AP */        
        $("#ap_calculate_total").click(function() {
            apIncentivesTotalAmount = (apTitle1FinalAmount + apHighestPriorityFinalAmount
                                            + apPathwaysFinalAmount + apTopPerformingAmount + apHighGrowthAmount + apE8SecondaryFinalAmount);
            $("#ap_total_incentives_output").html("$" + commaSeparateNumber(apIncentivesTotalAmount));
        });
/* Reset AP */     
        $("#ap_clear_form").click(function(){
            $("#ap div").find('#ap_title1_output,#ap_highest_output,#ap_pathways_output,#ap_top_performing_output,#ap_high_growth_output,#ap_total_incentives_output').html(" ");
            
            $('#ap').find('input:text, select').val('');
            $('#ap').find('input:checkbox').prop('checked', false).attr('disabled', false);
            
            $('#ap_title1_elementary').attr('disabled', true);
            $('#ap_title1_secondary').attr('disabled', true);
            $('#ap_highest_priority_elementary').attr('disabled', true);
            $('#ap_highest_priority_secondary').attr('disabled', true);
            $('#ap_pathways').attr('disabled', true);
            $("#ap_title1_elementary_600Less").attr('disabled', true);
            $("#ap_title1_elementary_600Plus").attr('disabled', true);
            $("#ap_highest_priority_elementary_600Less").attr('disabled', true);
            $("#ap_highest_priority_elementary_600Plus").attr('disabled', true);
            
            apTitle1FinalAmount = 0;
            apHighestPriorityFinalAmount = 0;
            apPathwaysFinalAmount = 0;
            apTopPerformingAmount = 0;
            apHighGrowthAmount = 0;
            apIncentivesTotalAmount = 0;
            apE8SecondaryFinalAmount = 0;
        });
               
        function commaSeparateNumber(val){
            while (/(\d+)(\d{3})/.test(val.toString())){
                val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
            }
            return val;
        }        
    });
    
    
      
    
    