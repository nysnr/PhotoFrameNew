const fs = require('fs');
const path = 'App.js';
let content = fs.readFileSync(path, 'utf8');

// Correct Japanese
const jaCorrect = `  ja: {
    Dark: 'ダーク',
    White: 'ホワイト',
    Ocean: '海',
    Sunset: '夕暮れ',
    Forest: '森',
    Rose: 'ローズ',
    Lavender: 'ラベンダー',
    Oak: 'オーク',
    PhotoFrame: 'フォトフレーム',
    Settings: '設定',
    Gallery: 'ギャラリー',
    SelectPhoto: '写真を選択',
    SavePhoto: '写真を保存',
    Cancel: 'キャンセル',
    Confirm: '確認',
    Loading: '読み込み中...',
    NoPhotos: '写真が見つかりません',
    'app.close': '閉じる',
    'app.title': 'フォトフレーム',
    'app.settings': '設定',
    'app.selectPhotos': '選択中: {{count}}枚',
    'settings.changeLanguage': '言語を変更',
    'loading.initializing': '初期化中...',
    'loading.photos': '写真を読み込み中...',
    'button.retry': '再試行',
    'button.understand': '了解',
    'button.startSlideshow': '▶ スライドショー開始',
    'hint.swipeDown': 'もっと見るには下にスワイプしてください',
    'loading.morePhotos': '追加の写真を読み込み中...',
    'settings.matteColor': 'カラー',
    'settings.slideshowInterval': 'スライドショー間隔',
    'settings.language': '言語',
    'settings.seconds': '{{count}}秒',
    'settings.minutes': '{{count}}分',
    'settings.dark': 'ダーク',
    'settings.white': 'ホワイト',
    'settings.ocean': '海',
    'settings.sunset': '夕暮れ',
    'settings.forest': '森',
    'settings.rose': 'ローズ',
    'settings.lavender': 'ラベンダー',
    'settings.oak': 'オーク',
    'settings.clockAndDateDisplay': '時計と日付表示',

    'label.clockOn': '時計オン',
    'label.clockOff': '時計オフ',
    'label.dateOn': '日付オン',
    'label.dateOff': '日付オフ',
    'label.on': 'オン',
    'label.off': 'オフ',
    'settings.clockDateSize': '時計と日付の文字サイズ',
    'label.sizeSmall': '小サイズ',
    'label.sizeMedium': '中サイズ',
    'label.sizeLarge': '大サイズ',

    'permission.title': '📷 写真へのアクセス',
    'permission.message': 'PhotoFrameアプリが写真にアクセスするには、端末の設定で写真へのアクセス権限を許可してください。',
    'alert.languageChanged.title': '言語変更',
    'alert.languageChanged.message': '言語を{{language}}に設定しました',
    'lang.en': '英語',
    'lang.ja': '日本語',
    'lang.zh': '中国語',
    'lang.es': 'スペイン語',
    'alert.selectPhotos.title': '写真を選択してください',
    'alert.selectPhotos.message': '最低1枚の写真を選択してからスライドショーを開始してください。',
    'app.help': 'ヘルプ',
    'help.about': 'アプリについて',
    'help.usage': '使い方ガイド',
    'help.usageContent': '1. 一覧から写真を選択します。\\n2. 「スライドショー開始」ボタンをタップします。\\n3. 設定メニューでスライドショーの間隔や時計表示などをカスタマイズできます。\\n4. フォトフレームをお楽しみください！\\n\\nスライドショー中に画面をタップすると操作ボタンが表示されます。',
    'help.version': 'バージョン',
    'help.contact': 'お問い合わせ',
    'help.legal': '法的事項',
    'help.privacyPolicy': 'プライバシーポリシー',
    'help.termsOfService': '利用規約',
    'help.back': '戻る',
    'help.viewOnline': 'オンラインで詳細を見る',
    'help.privacyPolicyContent': 'このアプリは、ユーザーの個人データを収集しません。アプリ内で写真を表示するためにのみ、デバイスの写真ライブラリにアクセスします。写真がどこかなるサーバーにもアップロードされることはありません。\\n\\nただし、広告表示のためにAdMob（Google）を使用しています。AdMobは、広告のパーソナライズのためにデータを収集し、Cookie/識別子を使用する場合があります。このアプリを使用することで、このデータ使用に同意したものとみなされます。',
    'help.termsOfServiceContent': 'このアプリは現在の状態で提供され、動作の完全性を保証するものではありません。開発者は、このアプリの使用から生じるいかなる損害についても責任を負いません。お客様は、適用されるすべての法律に従い、責任を持ってアプリを使用することに同意するものとします。'
  },`;

// Correct Chinese
const zhCorrect = `  zh: {
    Dark: '深色',
    White: '白色',
    Ocean: '海洋',
    Sunset: '日落',
    Forest: '森林',
    Rose: '玫瑰',
    Lavender: '薰衣草',
    Oak: '橡木',
    PhotoFrame: '相框',
    Settings: '设置',
    Gallery: '图库',
    SelectPhoto: '选择照片',
    SavePhoto: '保存照片',
    Cancel: '取消',
    Confirm: '确认',
    Loading: '加载中...',
    NoPhotos: '未找到照片',
    'app.close': '关闭',
    'app.title': '相框',
    'app.settings': '设置',
    'app.selectPhotos': '已选择: {{count}} 张照片',
    'settings.changeLanguage': '更改语言',
    'loading.initializing': '初始化中...',
    'loading.photos': '正在加载照片...',
    'button.retry': '重试',
    'button.understand': '知道了',
    'button.startSlideshow': '▶ 开始幻灯片',
    'hint.swipeDown': '向下滑动查看更多',
    'loading.morePhotos': '正在加载更多照片...',
    'settings.matteColor': '颜色',
    'settings.slideshowInterval': '幻灯片间隔',
    'settings.language': '语言',
    'settings.seconds': '{{count}}秒',
    'settings.minutes': '{{count}}分',
    'settings.dark': '深色',
    'settings.white': '白色',
    'settings.ocean': '海洋',
    'settings.sunset': '日落',
    'settings.forest': '森林',
    'settings.rose': '玫瑰',
    'settings.lavender': '薰衣草',
    'settings.oak': '橡木',
    'settings.clockAndDateDisplay': '时钟与日期显示',

    'label.clockOn': '时钟开启',
    'label.clockOff': '时钟关闭',
    'label.dateOn': '日期开启',
    'label.dateOff': '日期关闭',
    'label.on': '开启',
    'label.off': '关闭',
    'settings.clockDateSize': '时钟与日期字体大小',
    'label.sizeSmall': '小',
    'label.sizeMedium': '中',
    'label.sizeLarge': '大',

    'permission.title': '📷 照片访问',
    'permission.message': '要允许 PhotoFrame 访问照片，请在设备设置中启用照片权限。',
    'alert.languageChanged.title': '语言更改',
    'alert.languageChanged.message': '语言已设置为 {{language}}',
    'lang.en': '英语',
    'lang.ja': '日语',
    'lang.zh': '中文',
    'lang.es': '西班牙语',
    'alert.selectPhotos.title': '请选择照片',
    'alert.selectPhotos.message': '开始幻灯片前请至少选择一张照片。',
    'app.help': '帮助',
    'help.about': '关于应用',
    'help.usage': '使用指南',
    'help.usageContent': '1. 从列表中选择照片。\\n2. 点击“开始幻灯片”按钮。\\n3. 在设置菜单中自定义幻灯片间隔和时钟显示。\\n4. 尽情享受您的数码相框！\\n\\n幻灯片播放时点击屏幕可显示控制按钮。',
    'help.version': '版本',
    'help.contact': '联系方式',
    'help.legal': '法律',
    'help.privacyPolicy': '隐私政策',
    'help.termsOfService': '服务条款',
    'help.back': '返回',
    'help.viewOnline': '在线查看详情',
    'help.privacyPolicyContent': '我们把您的隐私视为重中之重。此应用程序完全在您的设备本地运行以显示您的照片。您的照片不会上传到任何服务器或与第三方共享。\\n\\n为了维持此应用程序免费，我们使用 Google AdMob 进行广告宣传。AdMob 可能会使用匿名标识符来展示相关广告。使用此应用程序即表示您同意此标准做法。',
    'help.termsOfServiceContent': '感谢您使用 PhotoFrame。本应用程序按“现状”提供，以帮助您欣赏照片。虽然我们力求完美，但开发者不对因使用本应用程序而产生的任何问题负责。请负责任地使用。'
  },`;

// Find and replace ja block
const jaStart = content.indexOf('  ja: {');
if (jaStart !== -1) {
  let jaEnd = content.indexOf('  },', jaStart);
  if (jaEnd !== -1) {
    jaEnd += 4; // Include "  },"
    const before = content.substring(0, jaStart);
    const after = content.substring(jaEnd);
    content = before + jaCorrect + after;
  } else {
      console.log('ja end not found');
  }
} else {
    console.log('ja start not found');
}

// Find and replace zh block
const zhStart = content.indexOf('  zh: {');
if (zhStart !== -1) {
  let zhEnd = content.indexOf('  },', zhStart);
  if (zhEnd !== -1) {
    zhEnd += 4; // Include "  },"
    const before = content.substring(0, zhStart);
    const after = content.substring(zhEnd);
    content = before + zhCorrect + after;
  } else {
      console.log('zh end not found');
  }
} else {
    console.log('zh start not found');
}

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed translations');
