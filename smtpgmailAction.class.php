<?php
include "classes/class.phpmailer.php"; // include the class name
include "classes/class.smtp.php"; // include the class name

class smtpgmailAction extends Action {

  public function main(){

      date_default_timezone_set('America/Detroit');
      $hour = date("H");
      echo date("H:i");     

  #   if($hour === "06"){//Our email group sent would begin at 6:00 am every day at estern time.

      $user = new UserModel();//The new Messages model is defined in /var/www/App/Lib/Model/UserModel.class.php
      $condition['subscribe'] = 'yes';
      $condition['category'] = 'HERO';
      $email_list = $user->where($condition)->getField('email',TRUE);

       for ($i = 0;$i < count($email_list);$i++){

         $condition2['email'] = $email_list[$i];
         $lat = $user->where($condition2)->getField('lat');
         $lng = $user->where($condition2)->getField('lng');
         $zipcode = $user->where($condition2)->getField('zipcode');
         $this->sendEmail($email_list[$i],$lat,$lng,$zipcode);
          //echo count($email_list);
     
      }

  # }

}


public function sendEmail($email,$lat,$lng,$zipcode){

   //if(isset($_POST["send"])){
	//$email = $_POST["email"];
	//$lat = $_POST["lat"];
	//$lng = $_POST["lng"];

        $email = $email;
        $lat = $lat;
	$lng = $lng;
        $zipcode = $zipcode; 

	$mail = new PHPMailer(); // create a new object
	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true; // authentication enabled
	$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 465; // 465 or 587
	$mail->IsHTML(true);
	$mail->SMTPAuth = true;
	$mail->Username = "herowayne.service@gmail.com";
	$mail->Password = "herowayne2014";
	$mail->SetFrom("herowayne.service@gmail.com");
	$mail->Subject = "Your HERO Index for today";




	$json = file_get_contents('http://141.217.48.221/App/index.php?lat='.$lat.'&lng='.$lng.'');
	$obj = json_decode($json);
	// location
	$location = $obj->location;



	$c1 = $obj->current_CO2_emission;
	$c2 = $obj->leem_2_hours_later_time_CO2_emission;
	$c3 = $obj->leem_4_hours_later_time_CO2_emission;
	$c4 = $obj->leem_6_hours_later_time_CO2_emission;
	$c5 = $obj->leem_8_hours_later_time_CO2_emission;
	$c6 = $obj->leem_10_hours_later_time_CO2_emission;
	$c7 = $obj->leem_12_hours_later_time_CO2_emission;
	$c8 = $obj->leem_14_hours_later_time_CO2_emission;
	// $c9 = $obj->sixteen_hours_later_time_CO2_emission;
	// $c10 = $obj->eighteen_hours_later_time_CO2_emission;

	$s1 = $obj->current_SO2_emission;
	$s2 = $obj->leem_2_hours_later_time_SO2_emission;
	$s3 = $obj->leem_4_hours_later_time_SO2_emission;
	$s4 = $obj->leem_6_hours_later_time_SO2_emission;
	$s5 = $obj->leem_8_hours_later_time_SO2_emission;
	$s6 = $obj->leem_10_hours_later_time_SO2_emission;
	$s7 = $obj->leem_12_hours_later_time_SO2_emission;
	$s8 = $obj->leem_14_hours_later_time_SO2_emission;
	// $s9 = $obj->sixteen_hours_later_time_SO2_emission;
	// $s10 = $obj->eighteen_hours_later_time_SO2_emission;

	$n1 = $obj->current_NO2_emission;
	$n2 = $obj->leem_2_hours_later_time_NO2_emission;
	$n3 = $obj->leem_4_hours_later_time_NO2_emission;
	$n4 = $obj->leem_6_hours_later_time_NO2_emission;
	$n5 = $obj->leem_8_hours_later_time_NO2_emission;
	$n6 = $obj->leem_10_hours_later_time_NO2_emission;
	$n7 = $obj->leem_12_hours_later_time_NO2_emission;
	$n8 = $obj->leem_14_hours_later_time_NO2_emission;
	// $n9 = $obj->sixteen_hours_later_time_NO2_emission;
	// $n10 = $obj->eighteen_hours_later_time_NO2_emission;

	$p1 = $obj->current_Lead_emission;
	$p2 = $obj->leem_2_hours_later_time_Lead_emission;
	$p3 = $obj->leem_4_hours_later_time_Lead_emission;
	$p4 = $obj->leem_6_hours_later_time_Lead_emission;
	$p5 = $obj->leem_8_hours_later_time_Lead_emission;
	$p6 = $obj->leem_10_hours_later_time_Lead_emission;
	$p7 = $obj->leem_12_hours_later_time_Lead_emission;
	$p8 = $obj->leem_14_hours_later_time_Lead_emission;
	// $p9 = $obj->sixteen_hours_later_time_Lead_emission;
	// $p10 = $obj->eighteen_hours_later_time_Lead_emission;

	$m1 = $obj->current_Mercury_emission;
	$m2 = $obj->leem_2_hours_later_time_Mercury_emission;
	$m3 = $obj->leem_4_hours_later_time_Mercury_emission;
	$m4 = $obj->leem_6_hours_later_time_Mercury_emission;
	$m5 = $obj->leem_8_hours_later_time_Mercury_emission;
	$m6 = $obj->leem_10_hours_later_time_Mercury_emission;
	$m7 = $obj->leem_12_hours_later_time_Mercury_emission;
	$m8 = $obj->leem_14_hours_later_time_Mercury_emission;
 

	$current_value_c = $this->clevel($c1);
	$current_value_s = $this->slevel($s1);
	$current_value_n = $this->nlevel($n1);
	$current_value_p = $this->plevel($p1);
	$current_value_m = $this->mlevel($m1);

	$two_value_c = $this->clevel($c2);
	$two_value_s = $this->slevel($s2);
	$two_value_n = $this->nlevel($n2);
	$two_value_p = $this->plevel($p2);
	$two_value_m = $this->mlevel($m2);


	$four_value_c = $this->clevel($c3);
	$four_value_s = $this->slevel($s3);
	$four_value_n = $this->nlevel($n3);
	$four_value_p = $this->plevel($p3);
	$four_value_m = $this->mlevel($m3);


	$six_value_c = $this->clevel($c4);
	$six_value_s = $this->slevel($s4);
	$six_value_n = $this->nlevel($n4);
	$six_value_p = $this->plevel($p4);
	$six_value_m = $this->mlevel($m4);


	$eight_value_c = $this->clevel($c5);
	$eight_value_s = $this->slevel($s5);
	$eight_value_n = $this->nlevel($n5);
	$eight_value_p = $this->plevel($p5);
	$eight_value_m = $this->mlevel($m5);

	$ten_value_c = $this->clevel($c6);
	$ten_value_s = $this->slevel($s6);
	$ten_value_n = $this->nlevel($n6);
	$ten_value_p = $this->plevel($p6);
	$ten_value_m = $this->mlevel($m6);

	$twelve_value_c = $this->clevel($c7);
	$twelve_value_s = $this->slevel($s7);
	$twelve_value_n = $this->nlevel($n7);
	$twelve_value_p = $this->plevel($p7);
	$twelve_value_m = $this->mlevel($m7);

	$fourteen_value_c = $this->clevel($c8);
	$fourteen_value_s = $this->slevel($s8);
	$fourteen_value_n = $this->nlevel($n8);
	$fourteen_value_p = $this->plevel($p8);
	$fourteen_value_m = $this->mlevel($m8);





        date_default_timezone_set('America/New_York');
	$date=date('m/d/y');       

	$body = '

</html>
			<body style="text-align:left; width: 750px;height:475px; margin: 0 auto auto auto; border-radius:2em;border: 3px solid black;">
 			<div style="background:#F7FFFF;padding:20px;border-radius:2em;">
				<div>
					<h2>Here is your marginal electricity emissions forecast for today:</h2>
				</div>
				<big>Date:  '.$date.'</big><br>
				<big>Zip Code: '.$zipcode.'</big><br><br>

              	
                	<div >
                	<table style="font-size:11px;border-collapse: collapse; border: none; width: 700px; text-align: center;">
						<tr style="height:30px;">
							<td style="border: solid #000 1px; width:60px;"><big><big>&nbsp;</big></big></td>
							<td style="border: solid #000 1px; width:60px;"> <big><big><p name="TimeValue1" >6 am </p> </big></big></td>
							<td style="border: solid #000 1px; width:60px;"> <big><big><p name="TimeValue2" >8 am </p> </big></big></td>
							<td style="border: solid #000 1px; width:60px;"> <big><big><p name="TimeValue3" >10 am</p> </big></big></td>
							<td style="border: solid #000 1px; width:60px;"> <big><big><p name="TimeValue4" >12 pm</p> </big></big></td>
							<td style="border: solid #000 1px; width:60px;"> <big><big><p name="TimeValue5" >2 pm</p> </big></big></td>
							<td style="border: solid #000 1px; width:60px;"> <big><big><p name="TimeValue6" >4 pm </p> </big></big></td>
							<td style="border: solid #000 1px; width:60px;"> <big><big><p name="TimeValue7" >6 pm</p> </big></big></td>
							<td style="border: solid #000 1px; width:60px;"> <big><big><p name="TimeValue8" >8 pm</p> </big></big></td>
						</tr>
						<tr style="height:75px;">
							<td style="border: solid #000 1px; width:60px;"> <big><big>Emissions</big></big></td>

							<td style="border: solid #000 1px; width:60px;">
                                <div style="position:relative">
                                <img id="sC_1" src='.$current_value_c.' width="70" height="70"  style="position:absolute;z-index:1; top:-33px; left:0px;">
                                <img id="sS_1" src='.$current_value_s.' width="70" height="70"  style="position:absolute;z-index:2; top:-33px; left:0px;">
                                <img id="sN_1" src='.$current_value_n.' width="70" height="70"  style="position:absolute;z-index:3; top:-33px; left:0px;">
                                <img id="sP_1" src='.$current_value_p.' width="70" height="70"  style="position:absolute;z-index:4; top:-33px; left:0px;">
                                <img id="sM_1" src='.$current_value_m.' width="70" height="70"  style="position:absolute;z-index:5; top:-33px; left:0px;">
                            </div>
                            </td>
                            <td style="border: solid #000 1px; width:60px;">
                                <div style="position:relative">
                                <img id="sC_2" src='.$two_value_c.' width="70" height="70"  style="position:absolute;z-index:1; top:-33px; left:0px;">
                                <img id="sS_2" src='.$two_value_s.' width="70" height="70"  style="position:absolute;z-index:2; top:-33px; left:0px; ">
                                <img id="sN_2" src='.$two_value_n.' width="70" height="70"  style="position:absolute;z-index:3; top:-33px; left:0px;">
                                <img id="sP_2" src='.$two_value_p.' width="70" height="70"  style="position:absolute;z-index:4; top:-33px; left:0px;">
                                <img id="sM_2" src='.$two_value_m.' width="70" height="70"  style="position:absolute;z-index:5; top:-33px; left:0px;">
                            </div>
                            </td>
                            <td style="border: solid #000 1px; width:60px;">
                                <div style="position:relative">
                                <img id="sC_3" src='.$four_value_c.' width="70" height="70"  style="position:absolute;z-index:1; top:-33px; left:0px;">
                                <img id="sS_3" src='.$four_value_s.' width="70" height="70"  style="position:absolute;z-index:2; top:-33px; left:0px;">
                                <img id="sN_3" src='.$four_value_n.' width="70" height="70"  style="position:absolute;z-index:3; top:-33px; left:0px;">
                                <img id="sP_3" src='.$four_value_p.' width="70" height="70"  style="position:absolute;z-index:4; top:-33px; left:0px;">
                                <img id="sM_3" src='.$four_value_m.' width="70" height="70"  style="position:absolute;z-index:5; top:-33px; left:0px;">
                            </div>
                            </td>
                            <td style="border: solid #000 1px; width:60px;">
                                <div style="position:relative">
                                <img id="sC_4" src='.$six_value_c.' width="70" height="70"  style="position:absolute;z-index:1; top:-33px; left:0px;">
                                <img id="sS_4" src='.$six_value_s.' width="70" height="70"  style="position:absolute;z-index:2; top:-33px; left:0px; ">
                                <img id="sN_4" src='.$six_value_n.' width="70" height="70"  style="position:absolute;z-index:3; top:-33px; left:0px;">
                                <img id="sP_4" src='.$six_value_p.' width="70" height="70"  style="position:absolute;z-index:4; top:-33px; left:0px;">
                                <img id="sM_4" src='.$six_value_m.' width="70" height="70"  style="position:absolute;z-index:5; top:-33px; left:0px;">
                            </div>
                            </td>
                            <td style="border: solid #000 1px; width:60px;">
                                <div style="position:relative">
                                <img id="sC_5" src='.$eight_value_c.' width="70" height="70"  style="position:absolute;z-index:1; top:-33px; left:0px;">
                                <img id="sS_5" src='.$eight_value_s.' width="70" height="70"  style="position:absolute;z-index:2; top:-33px; left:0px; ">
                                <img id="sN_5" src='.$eight_value_n.' width="70" height="70"  style="position:absolute;z-index:3; top:-33px; left:0px;">
                                <img id="sP_5" src='.$eight_value_p.' width="70" height="70"  style="position:absolute;z-index:4; top:-33px; left:0px;">
                                <img id="sM_5" src='.$eight_value_m.' width="70" height="70"  style="position:absolute;z-index:5; top:-33px; left:0px;">
                            </div>
                            </td>
                            <td style="border: solid #000 1px; width:60px;">
                                <div style="position:relative">
                                <img id="sC_6" src='.$ten_value_c.' width="70" height="70"  style="position:absolute;z-index:1; top:-33px; left:0px;">
                                <img id="sS_6" src='.$ten_value_s.' width="70" height="70"  style="position:absolute;z-index:2; top:-33px; left:0px; ">
                                <img id="sN_6" src='.$ten_value_n.' width="70" height="70"  style="position:absolute;z-index:3; top:-33px; left:0px;">
                                <img id="sP_6" src='.$ten_value_p.' width="70" height="70"  style="position:absolute;z-index:4; top:-33px; left:0px;">
                                <img id="sM_6" src='.$ten_value_m.' width="70" height="70"  style="position:absolute;z-index:5; top:-33px; left:0px;">
                            </div>
                            </td>
                            <td style="border: solid #000 1px; width:60px;">
                                <div style="position:relative">
                                <img id="sC_7" src='.$twelve_value_c.' width="70" height="70"  style="position:absolute;z-index:1; top:-33px; left:0px;">
                                <img id="sS_7" src='.$twelve_value_s.' width="70" height="70"  style="position:absolute;z-index:2; top:-33px; left:0px;">
                                <img id="sN_7" src='.$twelve_value_n.' width="70" height="70"  style="position:absolute;z-index:3; top:-33px; left:0px;">
                                <img id="sP_7" src='.$twelve_value_p.' width="70" height="70"  style="position:absolute;z-index:4; top:-33px; left:0px;">
                                <img id="sM_7" src='.$twelve_value_m.' width="70" height="70"  style="position:absolute;z-index:5; top:-33px; left:0px;">
                            </div>
                            </td>
                            <td style="border: solid #000 1px; width:60px;">
                                <div style="position:relative">
                                <img id="sC_8" src='.$fourteen_value_c.' width="70" height="70"  style="position:absolute;z-index:1; top:-33px; left:0px;">
                                <img id="sS_8" src='.$fourteen_value_s.' width="70" height="70"  style="position:absolute;z-index:2; top:-33px; left:0px;">
                                <img id="sN_8" src='.$fourteen_value_n.' width="70" height="70"  style="position:absolute;z-index:3; top:-33px; left:0px;">
                                <img id="sP_8" src='.$fourteen_value_p.' width="70" height="70"  style="position:absolute;z-index:4; top:-33px; left:0px;">
                                <img id="sM_8" src='.$fourteen_value_m.' width="70" height="70"  style="position:absolute;z-index:5; top:-33px; left:0px;">
                            </div>
                            

						</tr>
					</table>
				</div>

				<div style="text-align:center;margin-top:5px;" >
				<img src="http://141.217.48.221/App/Tpl/hero_html/new/images/intro.png" style="width:500px;height:60px;"/>
				</div>

				<p>     The HERO Index provides an at-a-glance view of current and projected rates of air pollution from electricity generation. 
              	The color green indicates times when air emissions are low. Red indicates times when air emissions are high. 
              	Use the table above to select the greenest time to engage in energy intensive activities.    </p>

            <div > <h3><p>Click <a href="http://141.217.48.221/App/Tpl/hero_html/new/table.html?lan='.$lat.'&long='.$lng.'">here</a> to see details or search for other places.</p></h3></div>
            <div > <h3><p>Would you like some suggestions of actions you can take during high or low index times? Click <a href="http://141.217.48.221/App/Tpl/hero_html/new/Actions.html">here</a>. Make a difference everyday with HERO! </h3></div>

            <hr/>
            <div>HERO forecast is brought to you by Wayne State University in partnership with the Great Lakes Protection Fund.</div>
        </div>
</body>

</html>


	';








	$mail->MsgHTML($body);
	$mail->AddAddress($email, "herowayne");
	$send = $mail->Send();
	 if($send){
		echo "Message has been sent";
	}
	else{
		echo "Mailer Error: " . $mail->ErrorInfo;
	}

//}  //do not need if.

}


 

        function clevel($c){
		switch ($c) {
			case null:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/original.png";
			case 1:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/C1.png";
			case 2:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/C2.png";
			case 3:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/C3.png";
			case 4:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/C4.png";
			case 5:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/C5.png";
		}
	}

	function slevel($s){
		switch ($s) {
			case null:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/original.png";
			case 1:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/S1.png";
			case 2:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/S2.png";
			case 3:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/S3.png";
			case 4:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/S4.png";
			case 5:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/S5.png";
		}
	}

	function nlevel($n){
		switch ($n) {
			case null:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/original.png";
			case 1:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/N1.png";
			case 2:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/N2.png";
			case 3:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/N3.png";
			case 4:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/N4.png";
			case 5:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/N5.png";
		}
	}

	function plevel($p){
		switch ($p) {
			case null:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/original.png";
			case 1:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/P1.png";
			case 2:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/P2.png";
			case 3:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/P3.png";
			case 4:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/P4.png";
			case 5:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/P5.png";
		}
	}

	function mlevel($m){
		switch ($m) {
			case null:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/original.png";
			case 1:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/M1.png";
			case 2:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/M2.png";
			case 3:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/M3.png";
			case 4:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/M4.png";
			case 5:
				return "http://141.217.48.221/App/Tpl/hero_html/new/images/M5.png";
		}
	}




}
?>