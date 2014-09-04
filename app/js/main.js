function background() {
	function rndm(mx) { return Math.floor(Math.random() * mx); }
	function rndmChr(string) { return string[rndm(string.length)]; }
	
	quotes = ['&lsquo;', '&rsquo;'];
    thai = ['ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ', 'ฉ', 'ช', 'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ', 'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส', 'ห', 'ฬ', 'อ', 'ฮ'];
    colors = ['light', 'dark'];
    
    size = Math.floor(($(document).width()+$(document).height())/200);
    	
	for(i=0; i<size; i++) {
		$('#background').append('<span class="quotes ' + rndmChr(colors) + '" style="font-size: ' + (Math.pow(rndm(50), 2)+48) + 'px; top: ' + (rndm(120)-10) + '%; left: ' + (rndm(120)-10) + '%;">' + rndmChr(quotes) + '</span>');
	}
    
    if($('#page').length > 0) for(i=0; i<size; i++) {
		$('#background').append('<span class="thai ' + rndmChr(colors) + '" style="font-size: ' + (Math.pow(rndm(25), 2)+24) + 'px; top: ' + (rndm(120)-10) + '%; left: ' + (rndm(120)-10) + '%;">' + rndmChr(thai) + '</span>');
	}
    
    $('#background span').each(function() {
        $(this).hide().delay(rndm(1000)).fadeIn(rndm(900)+100);
    });
}

$(document).ready(function () {
    background();
    $('#navicon').click(function () { $('.nav').closest('.column').toggleClass('is-mobilehidden'); });
});