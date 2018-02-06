<template>
<div class="sc-container">
    <h1 class="brand-logo">Salary Calculator</h1>
    <form class="main-section" onsubmit="return false">
        <div class="main-content">
            <div class="lg-input-wrapper">
                <h4 class="lg-input-heading">Hourly Wage</h4>
                <input placeholder="30" class="lg-input" id="hourlyWage" onchange="hourlyUpdated()" size="1" type="tel">
            </div>
            <div class="transfer-section">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 489.2 489.2" style="enable-background:new 0 0 489.2 489.2;" xml:space="preserve" width="105px" height="105px">
<g>
	<g>
		<path d="M481.044,382.5c0-6.8-5.5-12.3-12.3-12.3h-418.7l73.6-73.6c4.8-4.8,4.8-12.5,0-17.3c-4.8-4.8-12.5-4.8-17.3,0l-94.5,94.5    c-4.8,4.8-4.8,12.5,0,17.3l94.5,94.5c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-73.6-73.6h418.8    C475.544,394.7,481.044,389.3,481.044,382.5z" fill="#0da865"/>
		<path d="M477.444,98l-94.5-94.4c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l73.6,73.6h-418.8c-6.8,0-12.3,5.5-12.3,12.3    s5.5,12.3,12.3,12.3h418.8l-73.6,73.4c-4.8,4.8-4.8,12.5,0,17.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l94.5-94.5    C482.244,110.6,482.244,102.8,477.444,98z" fill="#0da865"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
            </div>
            <div class="lg-input-wrapper">
                <h4 class="lg-input-heading">Annual Salary</h4>
                <input placeholder="62400" class="lg-input" id="annualSalary" onchange="annualUpdated()" size="1" type="tel">
            </div>
        </div>

        <div class="aside">
            <a class="toggle-link" onclick="showOptions()">Modify Assumptions
                <div class="toggle-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 25.93 25.93" style="enable-background:new 0 0 25.93 25.93;" xml:space="preserve" width="12px" height="12px">
                            <g>
                                <g id="c118_triangle">
                                    <path d="M25.397,4.554h-2.042l-9.974,12.644c-0.101,0.124-0.256,0.197-0.416,0.197c-0.164,0-0.315-0.073-0.419-0.197L2.575,4.554    H0.532c-0.206,0-0.392,0.115-0.479,0.299c-0.09,0.184-0.064,0.403,0.06,0.561l12.435,15.762c0.104,0.125,0.255,0.2,0.419,0.2    c0.16,0,0.315-0.075,0.416-0.2L25.816,5.413c0.128-0.157,0.148-0.377,0.058-0.561C25.789,4.669,25.601,4.554,25.397,4.554z" fill="#02190f"/>
                                </g>
                                <g id="Capa_1_184_">
                                </g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            </svg>
                </div>

            </a>
            <div class="toggle-items" id="toggle-items">
                <div class="toggle-item"><h4 class="aside-subheading">Hours per Week</h4><input value="40" class="aside-input" id="hoursWeek" size="1" type="tel" min="0" max="168"></div>
                <div class="toggle-item"><h4 class="aside-subheading">Weeks per Year </h4><input value="52" class="aside-input" id="weeksYear" size="1" type="tel" min="0" max="52"></div>
            </div>
        </div>
        <div class="left-aligned">
            <button class="sc-main-button" onclick="calculateSalary()" >What's My Wage?</button>
        </div>

    </form>
</div>
</template>
