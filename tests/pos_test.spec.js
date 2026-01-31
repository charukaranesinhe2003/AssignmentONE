import { test, expect } from '@playwright/test';

test('Pos_Fun_0001',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('Api bath kanavaa.');
  await expect(outputBox).toContainText('අපි බත් කනවා.');
  
});

test('Pos_Fun_0002',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mama gamee gihiQQ, maamava hambavelaa, kasaaya hoyaagana, eeka mallita dhiila ennaQQ.');
  await expect(outputBox).toContainText('මම ගමේ ගිහිං, මාමව හම්බවෙලා, කසාය හොයාගන, ඒක මල්ලිට දීල එන්නං.');
  
});

test('Pos_Fun_0003',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mata vaeda karanna support ekak dhenna puluvandha?');
  await expect(outputBox).toContainText('මට වැඩ කරන්න support එකක් දෙන්න පුලුවන්ද?');  
});

test('Pos_Fun_0004',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('Mama monavath bonne naee. ');
  await expect(outputBox).toContainText('මම මොනවත් බොන්නෙ නෑ.');
  
});

test('Pos_Fun_0005',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mea vathura bonna hoDHadha?');
  await expect(outputBox).toContainText('මේ වතුර බොන්න හොඳද?');
  
});

test('Pos_Fun_0006',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('magee nama Mahindha raajapakSha nemee yaluvee.');
  await expect(outputBox).toContainText('මගේ නම මහින්ද රාජපක්ෂ නෙමේ යලුවේ.');
  
});

test('Pos_Fun_0007',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('Oyalage vaeda tika mama kalee naeththam mata pissu haedheyi.');
  await expect(outputBox).toContainText('ඔයලගෙ වැඩ ටික මම කලේ නැත්තම් මට පිස්සු හැදෙයි.');
  
});

test('Pos_Fun_0008',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('Oyata suBha sathiyak veevaa.');
  await expect(outputBox).toContainText('ඔයට සුභ සතියක් වේවා.');
  
});

test('Pos_Fun_0009',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('karuNaakara anee mata meka sampuurNa karala dhenavadha?');
  await expect(outputBox).toContainText('කරුණාකර අනේ මට මෙක සම්පූර්ණ කරල දෙනවද?');
  
});

test('Pos_Fun_0010',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mata harima mahansiyi.');
  await expect(outputBox).toContainText('මට හරිම මහන්සියි.');
  
});

test('Pos_Fun_0011',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('magee vada tika ubama karala dhiipan.');
  await expect(outputBox).toContainText('මගේ වඩ ටික උබම කරල දීපන්.');
  
});

test('Pos_Fun_0012',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('anee poddak inna mata mea aeDHuma aDHinna baee.');
  await expect(outputBox).toContainText('අනේ පොඩ්ඩක් ඉන්න මට මේ ඇඳුම අඳින්න බෑ.');
  
});

test('Pos_Fun_0013',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('matamehemainnabaeeaneematayannadhennapuluvandha?');
  await expect(outputBox).toContainText('මටමෙහෙමෛන්නබෑඅනේමටයන්නදෙන්නපුලුවන්ද?');
  
});

test('Pos_Fun_0014',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('chuttak chuttak chuttak balanna maa dhihaa chuttak chuttak chuttak kiyanna cheethanaa…');
  await expect(outputBox).toContainText('චුට්ටක් චුට්ටක් චුට්ටක් බලන්න මා දිහා චුට්ටක් චුට්ටක් චුට්ටක් කියන්න චේතනා…');
  
});

test('Pos_Fun_0015',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('api ena sathiyee vinoodha chaarikaavak yamu.');
  await expect(outputBox).toContainText('අපි එන සතියේ විනෝද චාරිකාවක් යමු.');
  
});

test('Pos_Fun_0016',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('Apita meeka karanna baene.');
  await expect(outputBox).toContainText('අපිට මේක කරන්න බැනෙ.');
  
});

test('Pos_Fun_0017',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('Oyaa adha thibba zoom meeting ekata hitiyadha?');
  await expect(outputBox).toContainText('ඔයා අද තිබ්බ zoom meeting එකට හිටියද?');
  
});

test('Pos_Fun_0018',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('oyage PC ekee RAM eka kiiyadha?');
  await expect(outputBox).toContainText('ඔයගෙ PC එකේ RAM එක කීයද?');
  
});

test('Pos_Fun_0019',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('api Rs.5000k dhenna baeene.');
  await expect(outputBox).toContainText('අපි Rs.5000ක් දෙන්න බෑනෙ.');
  
});

test('Pos_Fun_0020',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('apita plane ekak              ganna tharam vathkamak naee.');
  await expect(outputBox).toContainText('අපිට plane එකක්              ගන්න තරම් වත්කමක් නෑ.');
  
});

test('Pos_Fun_0021',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('api engineering department ekata gihiqq vaeda karamu.');
  await expect(outputBox).toContainText('අපි engineering department එකට ගිහිං වැඩ කරමු.');
  
});

test('Pos_Fun_0022',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('eyi mee miniho api vaedak karamu needha? ');
  await expect(outputBox).toContainText('එයි මේ මිනිහො අපි වැඩක් කරමු නේද? ');
  
});

test('Pos_Fun_0023',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('api Dharmaya asuru karana sathpuruShayoo vemu.');
  await expect(outputBox).toContainText('අපි ධර්මය අසුරු කරන සත්පුරුෂයෝ වෙමු.');
  
});

test('Pos_Fun_0024',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('elama machoo ehenaqq api kapunaa. ');
  await expect(outputBox).toContainText('එලම මචෝ එහෙනං අපි කපුනා. ');
  
});

test('Pos_Fun_0025',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('api ID eka hadhanna giyoth ethanimma kolaBA gihin, film ekak balala, phone ekath polave gahala, muhudhatath paenala ratama pudhuma karala apith pudhuma velaa ispirithaleth gihiqq gedhara enna puluvan unoth lokaviirayo kiyala paththare gihin loka puujitha vela SLIIT ekata gAUravayak athkaradhunna kiyala piliaraganiidha naeththnam apita pissu kiyala apiva koheta hari manasika rohalakata aethul karala beheth dhenna patan aran eka apita amaru hindha apiva vena thaenakata yavala eth hoDHA unee naethnam gedhara evala minissungen gutikala ayeth ispirithala gihin hodha vela gedhara enna puluvan veyi needha? ');
  await expect(outputBox).toContainText('අපි ID එක හදන්න ගියොත් එතනිම්ම කොලඹ ගිහින්, film එකක් බලල, phone එකත් පොලවෙ ගහල, මුහුදටත් පැනල රටම පුදුම කරල අපිත් පුදුම වෙලා ඉස්පිරිතලෙත් ගිහිං ගෙදර එන්න පුලුවන් උනොත් ලොකවීරයො කියල පත්තරෙ ගිහින් ලොක පූජිත වෙල SLIIT එකට ගෞරවයක් අත්කරදුන්න කියල පිලිඅරගනීද නැත්ත්නම් අපිට පිස්සු කියල අපිව කොහෙට හරි මනසික රොහලකට ඇතුල් කරල බෙහෙත් දෙන්න පටන් අරන් එක අපිට අමරු හින්ද අපිව වෙන තැනකට යවල එත් හොඳ උනේ නැත්නම් ගෙදර එවල මිනිස්සුන්ගෙන් ගුටිකල අයෙත් ඉස්පිරිතල ගිහින් හොද වෙල ගෙදර එන්න පුලුවන් වෙයි නේද? ');
  
});

test('Pos_Fun_0026',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('ohu jaya veevaa!! jaya veevaa!! kiiveeya.');
  await expect(outputBox).toContainText('ඔහු ජය වේවා!! ජය වේවා!! කීවේය.');
  
});

test('Pos_Fun_0027',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('karuNaakarala mata aeththa kiyanna.');
  await expect(outputBox).toContainText('කරුණාකරල මට ඇත්ත කියන්න.');
  
});

test('Pos_Fun_0028',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mata kiyala dhathak galavagannaethuva pahalata baehapan.');
  await expect(outputBox).toContainText('මට කියල දතක් ගලවගන්නැතුව පහලට බැහපන්.');
  
});

test('Pos_Fun_0029',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('menna bas eka giyaa.');
  await expect(outputBox).toContainText('මෙන්න බස් එක ගියා.');
  
});

test('Pos_Fun_0030',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('supiriyine!! api ehenaqq eka kaeellak ivara karaa.');
  await expect(outputBox).toContainText('සුපිරියිනෙ!! අපි එහෙනං එක කෑල්ලක් ඉවර කරා.');
  
});

test('Pos_Fun_0031',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('suBhama suBha upandhinayak veevaa!');
  await expect(outputBox).toContainText('සුභම සුභ උපන්දිනයක් වේවා!');
  
});
