
import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('api kaeema kanna yanavaa saha passe chithrapatayak balanna yanavaa kiyalaa api kalinma gedhara idhdhi kathaa karagaththaa.', { delay: 100 });

    await expect(page.getByText('අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයක් බලන්න යනවා කියලා අපි කලින්ම ගෙදර ඉද්දි කතා කරගත්තා.')).toBeVisible({ timeout: 10000 });
  });


  test('Pos_UI_0002 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama boodimata yanavaa.', { delay: 100 });

    await expect(page.getByText('මම බෝඩිමට යනවා.')).toBeVisible({ timeout: 10000 });
  });



  test('Pos_UI_0003 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama kama kanawa.', { delay: 100 });

    await expect(page.getByText('මම කෑම කනවා.')).toBeVisible({ timeout: 10000 });
  });


  test('Pos_UI_0004 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('Suba udhaesanak.', { delay: 100 });

    await expect(page.getByText('සුබ උදැසනක්.')).toBeVisible({ timeout: 10000 });
  });



    test('Pos_UI_0005 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('Oyaalaa kohomadha inne?', { delay: 100 });

    await expect(page.getByText('ඔයාලා කොහොමද ඉන්නේ?')).toBeVisible({ timeout: 10000 });
  });


   test('Pos_UI_0006 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('machan laptop eka slow venavaa, software update karala thiyenavadha? If error ekak aavoth, IT team ekata meseej ekak send karanna. Later mama check karannam.', { delay: 100 });

    await expect(page.getByText('මචන් laptop එක slow වෙනවා, software update කරල තියෙනවද? If error එකක් ආවොත්, IT team එකට මෙසේජ් එකක් send කරන්න. Later මම check කරන්නම්.')).toBeVisible({ timeout: 10000 });
  });



    test('Pos_UI_0007 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('oyaa enavaanam mama balan innavaa mokadha mata oyath ekka kathaa karanna hodha dheyak thiyenavaa.');

    await page.waitForTimeout(500);

    await expect(page.getByText('ඔයා එනවානම් මම බලන් ඉන්නවා මොකද මට ඔයත් එක්ක කතා කරන්න හොද දෙයක් තියෙනවා.')).toBeVisible({ timeout: 10000 });
  });



    test('Pos_UI_0008 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('adha vahina nisaa api gedhara innavaa kiyalaa thiiranaya kalaa, dhaen thee bonna hadhanne.');

    await page.waitForTimeout(500);

    await expect(page.getByText('අද වහින නිසා අපි ගෙදර ඉන්නවා කියලා තීරනය කලා, දැන් තේ බොන්න හදන්නෙ.')).toBeVisible({ timeout: 10000 });
  });


    test('Pos_UI_0009 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('apita iiyee Colombo gihin shopping karala ivaravela gedhara yanna bus ekak enakan godak vela inna vuna. Gedhara enakota hodatama rae vela.');

    await page.waitForTimeout(500);

    await expect(page.getByText('අපිට ඊයේ Colombo ගිහින් shopping කරල ඉවරවෙල ගෙදර යන්න bus එකක් එනකන් ගොඩක් වෙල ඉන්න වුන. ඟෙදර එනකොට හොඩටම රැ වෙල.')).toBeVisible({ timeout: 10000 });
  });


    test('Pos_UI_0010 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('eeka dhenna.');

    await page.waitForTimeout(500);

    await expect(page.getByText('ඒක දෙන්න.')).toBeVisible({ timeout: 10000 });
  });


    test('Pos_UI_0011 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('mama heta enavaa.');

    await page.waitForTimeout(500);

    await expect(page.getByText('මම හෙට එනවා')).toBeVisible({ timeout: 10000 });
  });



    test('Pos_UI_0012 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('api school gihin passe football gahala rae gedhara enavaa kiyalaa hithan inne.');

    await page.waitForTimeout(500);

    await expect(page.getByText('අපි school ගිහින් පස්සෙ football ගහල රැ ගෙදර එනවා කියලා හිතන් ඉන්නේ.')).toBeVisible({ timeout: 10000 });
  });



    test('Pos_UI_0013 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('api heta udhenma kalin naegitala ikmanata laeesthi velaa Campus yanna kiyalaa dhaen idalama hithaagena inne.');

    await page.waitForTimeout(500);

    await expect(page.getByText('අපි හෙට උදෙන්ම කලින් නැගිටල ඉක්මනට ලෑස්ති වෙලා Campus යන්න කියලා දැන් ඉඩලම හිතාගෙන ඉන්නේ.')).toBeVisible({ timeout: 10000 });
  });


    test('Pos_UI_0014 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('mama dhaen vaeda karanavaa.');

    await page.waitForTimeout(500);

    await expect(page.getByText('මම දැන් වැඩ කරනවා.')).toBeVisible({ timeout: 10000 });
  });


    test('Pos_UI_0015 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('eeka poddak dhenna.');

    await page.waitForTimeout(500);

    await expect(page.getByText('ඒක පොඩ්ඩක් දෙන්න.')).toBeVisible({ timeout: 10000 });
  });


    test('Pos_UI_0016 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('mama dhaen gedhara inne saha amma ekka kathaa karamin kitchen eke vaedavalata help karanna hadhanne.');

    await page.waitForTimeout(500);

    await expect(page.getByText('මම දැන් ගෙදර ඉන්නේ සහ අම්ම එක්ක කතා කරමින් kitchen eke වැඩවලට help කරන්න හදන්නෙ.')).toBeVisible({ timeout: 10000 });
  });




     test('Pos_UI_0017 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('mama udhee kalinma naegitala washroom giyaa. iita passe bath tikak kaalaa aevith poth bag eka hadhaagaththaa. Rae hariyata nindha giyee naethi nisaa mata tikak mahansiyi. Namuth adha dhavasa hodhata patan ganna puluvan kiyalaa hithan inne.');

    await page.waitForTimeout(500);

    await expect(page.getByText('මම උදේ කලින්ම නැගිටල washroom ගියා. ඊට පස්සෙ බත් ටිකක් කාලා ඇවිත් පොත් bag එක හදාගත්තා. Rae හරියට නින්ද ගියේ නැති නිසා මට ටිකක් මහන්සියි. ණමුත් අද දවස හොදට පටන් ගන්න පුලුවන් කියලා හිතන් ඉන්නේ.')).toBeVisible({ timeout: 10000 });
  });



     test('Pos_UI_0018 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('heta apee team eka ekathu vela project requirements analyze karanavaa, mama backend code setup karanava, oyaata frontend developers ekka API integrate karanna puluvandha? eeta passe testing karala bugs fix karanna venava, mokakdha hithanne oyaa? Group leader heta project eka client baaradhenna onee kiyanava.');

    await page.waitForTimeout(2000);

    await expect(page.getByText('හෙට අපේ team එක එකතු වෙල project requirements analyze කරනවා, මම බcකෙන්ඩ් code setup කරනව, ඔයාට ෆ්‍රොන්ටෙන්ඩ් developers එක්ක API integrate කරන්න පුලුවන්ද? ඒට පස්සෙ testing කරල bugs fix කරන්න වෙනව, මොකක්ද හිතන්නෙ ඔයා? Group leader හෙට project එක client බාරදෙන්න ඔනේ කියනව.')).toBeVisible({ timeout: 10000 });
  });


       test('Pos_UI_0019 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('adha rae yaaluvoth ekka boodimee bath hadhanavaa. mama table eka clean karala plates tika thiyala innavaa. iita passe api okkoma ekathu vela kaeema kanna balaporoththu venavaa. yaaluvo haemoma ekka ekata uyaagena kana eka gaena mata sathutuyi.');

    await page.waitForTimeout(2000);

    await expect(page.getByText('අද රැ යාලුවොත් එක්ක බෝඩිමේ බත් හදනවා. මම table එක clean කරල plates ටික තියල ඉන්නවා. ඊට පස්සෙ අපි ඔක්කොම එකතු වෙල කෑම කන්න බලපොරොත්තු වෙනවා. යාලුවො හැමොම එක්ක එකට උයාගෙන කන එක ගැන මට සතුටුයි.')).toBeVisible({ timeout: 10000 });
  });


    test('Pos_UI_0020 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('heta mama campus eke yaaluvoth ekka trip ekak yanna plan karanava, mama bus tickets book karanavaa, oyaatath apith ekka join venna puluvandha? iita passe hotel reservations karala onee karana dheval laesthi karanna venavaa, mokakda hithanne oyaa?');

    await page.waitForTimeout(500);

    await expect(page.getByText('හෙට මම campus eke යාලුවොත් එක්ක trip එකක් යන්න plan කරනව, මම bus tickets book කරනවා, ඔයාටත් අපිත් එක්ක join වෙන්න පුලුවන්ද? ඊට පස්සෙ hotel reservations කරල ඔනේ කරන දෙවල් ලැස්ති කරන්න වෙනවා, මොකක්ඩ හිතන්නෙ ඔයා?')).toBeVisible({ timeout: 10000 });
  });



    test('Pos_UI_0021 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('heta campus eke cricket match ekak organize karanna apee committee eka ekathu venavaa, teams register karanavaa, grounds book karanavaa, score board arrangements karanna oonee, playersla coordinate karanna kenek hoyaganna oonee, eeta passe rules explain karala match start karanna kiyalaa api plan karala inne.');

    await page.waitForTimeout(2000);

    await expect(page.getByText('හෙට campus eke cricket match එකක් organize කරන්න අපේ committee එක එකතු වෙනවා, teams register කරනවා, grounds book කරනවා, score board arrangements කරන්න ඕනේ, ප්ලයෙර්ස්ල coordinate කරන්න කෙනෙක් හොයගන්න ඕනේ, ඒට පස්සෙ rules explain කරල match start කරන්න කියලා අපි plan කරල ඉන්නේ.')).toBeVisible({ timeout: 10000 });
  });



  test('Pos_UI_0022 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama eeka karanna epaa kiyalaa kiyanavaa.', { delay: 100 });

    await expect(page.getByText('මම ඒක කරන්න එපා කියලා කියනවා.')).toBeVisible({ timeout: 10000 });
  });

   


    test('Pos_UI_0023 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('heta mama campus eke final exam ekata prepare venavaa, notes review karanavaa, previous year questions solve karanavaa, teachers lage instructions follow karanavaa, subjects vala important topics highlight karanavaa, yaaluvoth ekka discussion karanavaa, eeta passe time management plan karala passpapers valata answer liyanna kiyalaa hithan inne.');

    await page.waitForTimeout(2000);

    await expect(page.getByText('හෙට මම campus eke final exam එකට prepare වෙනවා, notes review කරනවා, previous year questions solve කරනවා, teachers ලගෙ instructions follow කරනවා, subjects වල important topics highlight කරනවා, යාලුවොත් එක්ක discussion කරනවා, ඒට පස්සෙ time management plan කරල පස්ස්පපෙර්ස් වලට answer ලියන්න කියලා හිතන් ඉන්නේ.')).toBeVisible({ timeout: 10000 });
  });



    test('Pos_UI_0024 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('heta mama apee campus library eke membership ekata apply karanavaa, labaadhena forms carefully fill karanavaa, required documents collect karanavaa, staff lage instructions follow karanavaa, rules hariyata read karanavaa, yaaluvoth ekka discussion karanavaa, iita passe library card eka issue karala books borrow karanna kiyalaa hithan inne.');

    await page.waitForTimeout(2000);

    await expect(page.getByText('හෙට මම අපේ campus library eke membership එකට apply කරනවා, ලබාදෙන forms carefully fill කරනවා, required documents collect කරනවා, staff ලගෙ instructions follow කරනවා, rules හරියට read කරනවා, යාලුවොත් එක්ක discussion කරනවා, ඊට පස්සෙ library card එක issue කරල books borrow කරන්න කියලා හිතන් ඉන්නේ.')).toBeVisible({ timeout: 10000 });
  });



      test('Neg_UI_0001 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('mama eeka karanna epaa kiyalaa click karanavaa');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });


  test('Neg_UI_0002 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('karunaakara eeka dhenna epaa kiyalaa type karanavaa');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });



    test('Neg_Fun_0003 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('hari hari');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });



    test('Neg_Fun_0004 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('api heta ennee naehae, mama eeka karannee naehae');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });


    test('Neg_Fun_0005 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('mama ppan kanna oonee saha oyaa enna');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });

    test('Neg_Fun_0006 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('karunaakara mata eeka dhenna');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });



    test('Neg_Fun_0007 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('oyaa enavaadha mama balan innavaa?');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });


    test('Neg_Fun_0008 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('heta mama exam ekata prepare karanavaa, notes review karanavaa, teachers la instructions follow karanavaa, eeta passe answer liyanna epaa kiyalaa system ignore karanavaa');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });


    test('Neg_Fun_0009 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('heta mama library membership ekata apply karanavaa, forms fill karanavaa, documents collect karanavaa, staff instructions follow karanavaa, eeta passe card issue karanna epaa kiyalaa system fail karanavaa');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });



    test('Neg_Fun_0010 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.fill('mamagedharayanavaa');

    await page.waitForTimeout(2000);

    await expect(page.getByText('')).toBeVisible({ timeout: 10000 });
  });

