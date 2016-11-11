let shills = {
  'Maggie Haberman': 'https://www.documentcloud.org/documents/3125945-Story-Memo.html',
  'John Harwood': 'https://wikileaks.org/podesta-emails/emailid/4303',
  'Wolf Blitzer': 'https://wikileaks.org/dnc-emails/emailid/27526',
  'Cecilia Vega': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'David Muir': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Diane Sawyer': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'George Stephanoplous': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Jon Karl': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'John Heillman': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Mark Halperin': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Norah O\'Donnell': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Vicki Gordon': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Brianna Keilar': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'David Chalian': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Gloria Borger': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Jeff Zeleny': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'John Berman': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Kate Bouldan': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Mark Preston': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Sam Feist': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Jackie Kucinich': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Mike Feldman': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Whitney Snyder': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Betsy Fisher Martin': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Alex Wagner': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Beth Fouhy': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Phil Griffin': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Rachel Maddow': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Rachel Racusen': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Savannah Gutherie': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Ryan Liza': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Amy Chozik': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Gail Collins': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Jonathan Martin': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Pat Healey': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Sandra Sobieraj Westfall': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Glenn Thrush': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Mike Allen': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Alyssa Mastramonoco': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Jon Allen': 'https://www.wikileaks.org/podesta-emails/emailid/5953',
  'Megyn Kelly': 'https://www.wikileaks.org/podesta-emails/emailid/45641',
  'Brent Budowsky': 'https://wikileaks.org/podesta-emails/emailid/55311#efmAAGACTAD-AIBAIDALp',
  'Mark Leibovich': 'https://wikileaks.org/podesta-emails/emailid/4213',
  'Kenneth Vogel': 'https://wikileaks.org/dnc-emails/emailid/10808',
  'Karen Tumulty': 'https://wikileaks.org/podesta-emails/emailid/47602'
}

let shillList = [];

Object.keys(shills).map((x) => {
	let value = {};
	value[x] = shills[x];
	document.body.innerHTML.indexOf(x) > - 1 && shillList.indexOf(value) == -1 && shillList.push(value);
});

if(shillList.length > 0){
	let notice = document.createElement('div');
	notice.classList = 'shilldetector-alert-snpjd696tt';
	notice.innerHTML = 'The names of ' + shillList.length + ' biased journalist' + (shillList.length  == 1 ? '' : 's')  + ' have been detected on this page. Click <a href="#" id="href-snpjd696tt">here</a> to toggle more information. <div class="close-snpjd696tt" id="close-snpjd696tt">&times;</div>';
	document.body.insertBefore(notice, document.body.children[0]);
	document.getElementById('close-snpjd696tt').addEventListener('click', () => {
		document.body.removeChild(notice);
	});

	let listNode = document.createElement('ul');
	listNode.style.display = 'none';
	shillList.map((s) => {
		let name = Object.keys(s)[0];
		let href = s[Object.keys(s)[0]];
		listNode.innerHTML+='<li><a target="_blank" href="' + href + '">' + name + '</a></li>';
	});
	notice.appendChild(listNode);

	document.getElementById('href-snpjd696tt').addEventListener('click', () => {
		listNode.style.display = listNode.style.display == 'block' ? 'none' : 'block'; 
	});
}

