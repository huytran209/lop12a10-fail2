'use strict';

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const students = [
    { name: 'Khả Anh', category: 'meaningful', icon: '✿', tint: '#fbe4eb', accent: '#cc7894', messages: ['Chúc Khả Anh luôn dịu dàng với chính mình, đủ tự tin để nói lên điều mình nghĩ và đủ mạnh mẽ để theo đuổi điều mình tin.', 'Mong những điều tốt đẹp sẽ tìm đến Khả Anh, còn những ngày khó khăn thì luôn có người sẵn lòng lắng nghe và đồng hành.'] },
    { name: 'Ngọc Bích', category: 'future', icon: '✧', tint: '#e3f2e9', accent: '#6caa8a', messages: ['Chúc Ngọc Bích có thật nhiều cơ hội mới, học được điều hay và từng bước tiến gần hơn đến ước mơ của mình.', 'Mong mỗi lựa chọn phía trước đều giúp Ngọc Bích hiểu bản thân hơn và tìm được con đường khiến mình hạnh phúc.'] },
    { name: 'Gia Dung', category: 'class', icon: '♡', tint: '#eee5fa', accent: '#a18ac5', messages: ['Chúc Gia Dung luôn giữ được những niềm vui nhỏ mỗi ngày và có thật nhiều kỷ niệm đáng nhớ cùng 12A10.', 'Cảm ơn Gia Dung vì là một phần của tập thể này. Mong tình bạn hôm nay sẽ trở thành ký ức đẹp khi chúng ta nhìn lại.'] },
    { name: 'Gia Hân', category: 'humor', icon: '☀', tint: '#fff0d5', accent: '#c59645', messages: ['Chúc Gia Hân kiểm tra gặp đúng phần đã ôn, bài tập tự giác hoàn thành và deadline bỗng dưng biết điều hơn bình thường!', 'Mong Gia Hân luôn có điểm số làm mình vui, giờ ra chơi thật dài và mỗi ngày đến lớp đều có một chuyện để cười.'] },
    { name: 'Hoàng Lan', category: 'meaningful', icon: '❀', tint: '#fbe4eb', accent: '#cc7894', messages: ['Chúc Hoàng Lan luôn được tôn trọng, được lắng nghe và không bao giờ phải thu nhỏ bản thân chỉ để vừa với kỳ vọng của người khác.', 'Mong Hoàng Lan luôn nhớ rằng giá trị của mình không nằm ở việc làm hài lòng tất cả mọi người, mà ở cách mình sống thật với bản thân.'] },
    { name: 'Thuỳ Linh', category: 'future', icon: '✦', tint: '#e5eefb', accent: '#7b97c5', messages: ['Chúc Thuỳ Linh vững vàng trước những lựa chọn sắp tới, đủ can đảm thử điều mới và gặp được nhiều người tốt trên hành trình của mình.', 'Mong Thuỳ Linh sẽ có một tương lai nhiều điều để mong đợi, nhiều nơi để khám phá và nhiều lý do để tự hào về chính mình.'] },
    { name: 'Lê Thảo My', category: 'class', icon: '♡', tint: '#eee5fa', accent: '#a18ac5', messages: ['Chúc Lê Thảo My có một ngày 20/10 thật vui và một năm học cuối cấp đầy những kỷ niệm mà sau này kể lại vẫn thấy ấm lòng.', 'Mong những ngày bình thường ở lớp mình cũng trở nên đặc biệt nhờ những người bạn bên cạnh — trong đó có Thảo My.'] },
    { name: 'Nguyễn Huỳnh Thảo My', category: 'humor', icon: '☁', tint: '#e2f2ef', accent: '#73a99e', messages: ['Chúc Nguyễn Huỳnh Thảo My học đâu nhớ đó, làm bài không run, đề thi thân thiện và mọi chiếc deadline đều được xử lý gọn gàng!', 'Mong lịch học bớt dày, giờ ra chơi kéo dài thêm một chút và mọi bài kiểm tra đều cho My cơ hội thể hiện đúng những gì đã ôn.'] },
    { name: 'Hoàng Ngọc', category: 'meaningful', icon: '✿', tint: '#fbe4eb', accent: '#cc7894', messages: ['Chúc Hoàng Ngọc có thật nhiều ngày bình yên, luôn tin vào năng lực của mình và biết nghỉ ngơi khi cần thiết.', 'Mong Hoàng Ngọc luôn gặp những người nhìn thấy nỗ lực của bạn, trân trọng sự chân thành và cùng bạn tạo nên những điều tốt đẹp.'] },
    { name: 'Nguyễn Quang Yến Nhi', category: 'future', icon: '✧', tint: '#e3f2e9', accent: '#6caa8a', messages: ['Chúc Nguyễn Quang Yến Nhi đạt được mục tiêu mình đã đặt ra, nhưng cũng tận hưởng cả hành trình chứ không chỉ chờ đến ngày về đích.', 'Mong Yến Nhi luôn có dũng khí bước qua vùng an toàn, tìm thấy thế mạnh của mình và tự hào về từng tiến bộ nhỏ.'] },
    { name: 'Trần Thị Yến Nhi', category: 'class', icon: '♡', tint: '#eee5fa', accent: '#a18ac5', messages: ['Chúc Trần Thị Yến Nhi giữ lại thật nhiều khoảnh khắc đẹp với 12A10 và luôn có những người bạn khiến mình thấy được là chính mình.', 'Mong những câu chuyện, tiếng cười và ngày tháng cùng lớp sẽ trở thành một phần thanh xuân mà Yến Nhi luôn muốn nhớ về.'] },
    { name: 'Hồng Phúc', category: 'humor', icon: '☀', tint: '#fff0d5', accent: '#c59645', messages: ['Chúc Hồng Phúc mỗi sáng đi học không vội, mỗi lần kiểm tra không hoang mang và mỗi lần xem điểm đều có thể thở phào nhẹ nhõm!', 'Mong Hồng Phúc có nhiều niềm vui hơn bài tập, nhiều giờ nghỉ đúng nghĩa và những buổi học mà cả lớp cười nhiều hơn nhìn đồng hồ.'] },
    { name: 'Nhật Phương', category: 'meaningful', icon: '❀', tint: '#fbe4eb', accent: '#cc7894', messages: ['Chúc Nhật Phương luôn mạnh mẽ theo cách riêng của mình, và cũng đủ thoải mái để chia sẻ khi cần một bờ vai hay lời động viên.', 'Mong Nhật Phương nhớ rằng không cần ngày nào cũng hoàn hảo; chỉ cần bạn vẫn đang cố gắng và đối xử tử tế với mình là đã rất đáng quý.'] },
    { name: 'Diễm Phương', category: 'future', icon: '✦', tint: '#e5eefb', accent: '#7b97c5', messages: ['Chúc Diễm Phương gặp đúng cơ hội, chọn được điều mình yêu thích và luôn có niềm tin để bắt đầu lại khi cần.', 'Mong mỗi năm trôi qua, Diễm Phương lại khám phá thêm một điều mình làm tốt và một lý do mới để yêu cuộc sống.'] },
    { name: 'Thu Phương', category: 'class', icon: '♡', tint: '#eee5fa', accent: '#a18ac5', messages: ['Chúc Thu Phương có một ngày 20/10 ngập tràn lời chúc dễ thương và những ngày ở lớp luôn có bạn bè để cùng chia sẻ niềm vui.', 'Cảm ơn Thu Phương đã góp mặt trong bức tranh 12A10. Mong chúng ta sẽ có thêm thật nhiều khoảnh khắc vui vẻ trước khi mỗi người bước sang chặng đường mới.'] },
    { name: 'Minh Tâm', category: 'humor', icon: '☁', tint: '#e2f2ef', accent: '#73a99e', messages: ['Chúc Minh Tâm học hành vào guồng, ghi nhớ công thức không cần cầu cứu vũ trụ và làm bài xong vẫn còn thời gian kiểm tra lại!', 'Mong vận may luôn đứng cùng phe với Minh Tâm: đề thi vừa sức, bút không hết mực và chuông tan học reo đúng lúc.'] },
    { name: 'Thái Thanh', category: 'meaningful', icon: '✿', tint: '#fbe4eb', accent: '#cc7894', messages: ['Chúc Thái Thanh luôn giữ được sự tự tin, lòng tốt và bản sắc riêng dù ở bất cứ môi trường nào.', 'Mong Thái Thanh có đủ bình yên để lắng nghe bản thân, đủ can đảm để nói “không” khi cần và đủ niềm vui để tận hưởng mỗi ngày.'] },
    { name: 'Kim Thuỳ', category: 'future', icon: '✧', tint: '#e3f2e9', accent: '#6caa8a', messages: ['Chúc Kim Thuỳ ngày càng gần với ước mơ của mình, gặp được người truyền cảm hứng và luôn nhớ mình đã tiến xa đến đâu.', 'Mong những dự định của Kim Thuỳ dần thành hình, những nỗ lực được đền đáp và con đường phía trước mở ra nhiều trải nghiệm đẹp.'] },
    { name: 'Kim Trúc', category: 'class', icon: '♡', tint: '#eee5fa', accent: '#a18ac5', messages: ['Chúc Kim Trúc có thêm nhiều kỷ niệm đáng yêu cùng các bạn, những cuộc trò chuyện thật vui và một mùa thanh xuân thật đáng nhớ.', 'Mong sau này khi nhớ đến lớp, Kim Trúc sẽ nhớ cả những khoảnh khắc ngẫu nhiên đã khiến một ngày bình thường trở nên đặc biệt.'] },
    { name: 'Thiên Trân', category: 'humor', icon: '☀', tint: '#fff0d5', accent: '#c59645', messages: ['Chúc Thiên Trân luôn vui vẻ, bài vở biết xếp hàng, deadline không dồn toa và hôm nào cũng có món ngon chờ sau giờ học!', 'Mong điểm số của Thiên Trân đẹp hơn cả giao diện app, lịch kiểm tra đừng bất ngờ và mỗi ngày đến trường đều có chuyện vui kể lại.'] }
  ];

  const categoryNames = { class: 'Tình bạn', humor: 'Vui vui', meaningful: 'Tâm tình', future: 'Tương lai' };
  const galleryItems = [
    { src: 'assets/images/gallery-01.jpg', alt: 'Tập thể 12A10 trong lớp học, bên bàn có những ly nước', caption: 'Chúng mình của hôm nay' },
    { src: 'assets/images/gallery-02.jpg', alt: 'Các thành viên lớp mặc áo xanh cùng chụp ảnh tập thể', caption: 'Một tập thể, nhiều cá tính' },
    { src: 'assets/images/gallery-03.jpg', alt: 'Cô giáo cùng học sinh lớp 12A10 chụp ảnh kỷ niệm', caption: 'Những người cùng ta trưởng thành' },
    { src: 'assets/images/gallery-04.jpg', alt: 'Nhóm bạn nữ 12A10 vui vẻ bên nhau', caption: 'Những bông hoa của lớp mình' },
    { src: 'assets/images/gallery-05.jpg', alt: 'Các bạn học sinh tạo dáng trong ảnh tập thể lớp', caption: 'Chuyện nhỏ, nhớ lâu' },
    { src: 'assets/images/gallery-06.jpg', alt: 'Các bạn nữ tạo dáng và cười trước bảng lớp', caption: 'Cười thật tươi nha' },
    { src: 'assets/images/gallery-07.jpg', alt: 'Nhóm bạn nam 12A10 chụp ảnh cùng những ly nước', caption: 'Đồng đội không thể thiếu' }
  ];

  const fortunes = [
    { category: 'VẬN MAY HỌC TẬP', icon: '✎', text: 'Mong mọi nỗ lực của bạn đều được đền đáp. Cứ ôn từng chút, bạn đang tiến bộ nhiều hơn mình nghĩ.' },
    { category: 'VẬN MAY TÌNH BẠN', icon: '♡', text: 'Chúc bạn luôn gặp những người chân thành — những người cùng cười với bạn và cũng lắng nghe khi bạn cần.' },
    { category: 'VẬN MAY TƯƠNG LAI', icon: '✧', text: 'Một cơ hội mới có thể bắt đầu từ sự can đảm hôm nay. Hãy cho bản thân cơ hội thử sức nhé.' },
    { category: 'VẬN MAY NIỀM VUI', icon: '☀', text: 'Mong hôm nay bạn cười nhiều hơn hôm qua, được ăn món mình thích và nhận một tin vui bất ngờ.' },
    { category: 'VẬN MAY TỰ TIN', icon: '✿', text: 'Bạn không cần phải trở thành ai khác để xứng đáng với những điều tốt đẹp. Hãy tin vào phiên bản đang lớn lên của mình.' },
    { category: 'VẬN MAY BÌNH YÊN', icon: '☁', text: 'Mong những ngày bận rộn vẫn có một khoảng nhỏ để bạn thở sâu, nghỉ ngơi và nhẹ nhàng với chính mình.' },
    { category: 'VẬN MAY CƠ HỘI', icon: '✦', text: 'Có thể điều hay ho nhất chưa xuất hiện. Cứ giữ sự tò mò và lòng tử tế, rồi tiếp tục bước về phía trước.' },
    { category: 'VẬN MAY ƯỚC MƠ', icon: '☆', text: 'Ước mơ lớn cũng bắt đầu từ những bước nhỏ. Chúc bạn đủ kiên trì để đi từng bước theo nhịp riêng của mình.' },
    { category: 'VẬN MAY NGÀY HÔM NAY', icon: '☼', text: 'Nhắc bạn một điều: bạn đã đi qua nhiều chuyện và vẫn đang cố gắng. Hôm nay hãy tự khen mình một câu nhé.' },
    { category: 'VẬN MAY NỤ CƯỜI', icon: '☺', text: 'Mong hôm nay có người làm bạn bật cười, một bài hát hợp tâm trạng và một lý do nho nhỏ để thấy ngày thật đáng yêu.' }
  ];

  const intro = $('#intro');
  const main = $('#main');
  const siteHeader = $('#siteHeader');
  const openGiftButton = $('#openGift');
  const audio = $('#backgroundMusic');
  const musicToggle = $('#musicToggle');
  const headerMusicButton = $('#headerMusicButton');
  const headerMusicLabel = $('#headerMusicLabel');
  const playIcon = $('#playIcon');
  const audioStatus = $('#audioStatus');
  const seekBar = $('#seekBar');
  const currentTime = $('#currentTime');
  const duration = $('#duration');
  const volumeBar = $('#volumeBar');
  let toastTimer = null;

  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return '--:--';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function syncMusicUI() {
    const playing = !audio.paused && !audio.ended;
    musicToggle.setAttribute('aria-label', playing ? 'Tạm dừng nhạc' : 'Phát nhạc');
    playIcon.textContent = playing ? 'Ⅱ' : '▶';
    headerMusicLabel.textContent = playing ? 'Đang phát' : 'Bật nhạc';
    $$('.music-bars').forEach((el) => el.classList.toggle('is-playing', playing));
    $('.music-card')?.classList.toggle('is-playing', playing);
    if (audio.duration && Number.isFinite(audio.duration)) duration.textContent = formatTime(audio.duration);
  }

  async function playMusic() {
    try {
      await audio.play();
      audioStatus.textContent = 'Đang phát · Chuyện rằng — Thịnh Suy';
    } catch (error) {
      audioStatus.textContent = 'Chưa phát được nhạc. Hãy nhấn nút phát lại nhé.';
      showToast('Trình duyệt chưa phát được nhạc. Bạn thử nhấn phát thêm lần nữa nhé.');
    }
    syncMusicUI();
  }

  function toggleMusic() {
    if (audio.paused) playMusic();
    else audio.pause();
  }

  function openExperience() {
    if (intro.hidden || intro.classList.contains('is-closing')) return;
    // The click itself is the user's explicit gesture; try starting the supplied track now.
    playMusic();
    intro.classList.add('is-closing');
    window.setTimeout(() => {
      intro.hidden = true;
      intro.classList.remove('is-closing');
      main.classList.add('is-visible');
      siteHeader.hidden = false;
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    }, reducedMotion ? 20 : 500);
  }

  openGiftButton.addEventListener('click', openExperience);
  musicToggle.addEventListener('click', toggleMusic);
  headerMusicButton.addEventListener('click', toggleMusic);
  audio.addEventListener('play', syncMusicUI);
  audio.addEventListener('pause', syncMusicUI);
  audio.addEventListener('ended', () => { audioStatus.textContent = 'Bài nhạc đã kết thúc. Bạn có thể nghe lại bất cứ lúc nào.'; syncMusicUI(); });
  audio.addEventListener('loadedmetadata', () => { duration.textContent = formatTime(audio.duration); syncMusicUI(); });
  audio.addEventListener('timeupdate', () => {
    currentTime.textContent = formatTime(audio.currentTime);
    if (Number.isFinite(audio.duration) && audio.duration > 0 && !seekBar.matches(':active')) seekBar.value = String((audio.currentTime / audio.duration) * 100);
  });
  audio.addEventListener('error', () => { audioStatus.textContent = 'Không tải được tệp nhạc. Kiểm tra assets/audio/chuyen-rang.m4a sau khi tải lên GitHub.'; });
  seekBar.addEventListener('input', () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = (Number(seekBar.value) / 100) * audio.duration;
      currentTime.textContent = formatTime(audio.currentTime);
    }
  });
  volumeBar.addEventListener('input', () => { audio.volume = Number(volumeBar.value); });
  audio.volume = Number(volumeBar.value);

  // Envelope interaction
  const envelopeButton = $('#envelopeButton');
  const envelopeStage = $('.envelope-stage');
  const letterMessage = $('#letterMessage');
  const envelopeHint = $('#envelopeHint');
  function openLetter() {
    envelopeButton.classList.add('is-open');
    envelopeButton.setAttribute('aria-expanded', 'true');
    letterMessage.hidden = false;
    envelopeStage.classList.add('is-letter-open');
    envelopeHint.textContent = 'Lá thư dành riêng cho những cô gái của 12A10 ♡';
  }
  function closeLetter() {
    envelopeButton.classList.remove('is-open');
    envelopeButton.setAttribute('aria-expanded', 'false');
    letterMessage.hidden = true;
    envelopeStage.classList.remove('is-letter-open');
    envelopeHint.innerHTML = 'Chạm vào phong thư để mở nhé <span aria-hidden="true">☟</span>';
  }
  envelopeButton.addEventListener('click', () => {
    if (envelopeButton.classList.contains('is-open')) closeLetter();
    else openLetter();
  });
  $('#closeLetter').addEventListener('click', closeLetter);

  // Accessible photo gallery lightbox
  const lightbox = $('#lightbox');
  const lightboxImage = $('#lightboxImage');
  const lightboxCaption = $('#lightboxCaption');
  const lightboxCount = $('#lightboxCount');
  let lightboxIndex = 0;
  let lastFocusedElement = null;
  let touchStartX = null;
  function updateLightbox() {
    const item = galleryItems[lightboxIndex];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;
    lightboxCaption.textContent = item.caption;
    lightboxCount.textContent = `${lightboxIndex + 1} / ${galleryItems.length}`;
  }
  function openLightbox(index) {
    lightboxIndex = (index + galleryItems.length) % galleryItems.length;
    lastFocusedElement = document.activeElement;
    updateLightbox();
    lightbox.hidden = false;
    document.body.classList.add('no-scroll');
    $('#lightboxClose').focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove('no-scroll');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
  }
  function moveLightbox(step) { lightboxIndex = (lightboxIndex + step + galleryItems.length) % galleryItems.length; updateLightbox(); }
  $$('.gallery-item').forEach((button) => button.addEventListener('click', () => openLightbox(Number(button.dataset.index))));
  $('#lightboxClose').addEventListener('click', closeLightbox);
  $('#lightboxPrev').addEventListener('click', () => moveLightbox(-1));
  $('#lightboxNext').addEventListener('click', () => moveLightbox(1));
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  lightbox.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
  lightbox.addEventListener('touchend', (event) => {
    if (touchStartX === null) return;
    const diff = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 45) moveLightbox(diff < 0 ? 1 : -1);
    touchStartX = null;
  }, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') moveLightbox(-1);
    if (event.key === 'ArrowRight') moveLightbox(1);
  });

  // Render personalized wishes; names and spelling match the supplied list.
  const wishesGrid = $('#wishesGrid');
  const wishSearch = $('#wishSearch');
  const emptyWishes = $('#emptyWishes');
  let activeFilter = 'all';
  const wishIndex = new Map();

  function renderWishes() {
    const query = wishSearch.value.trim().toLocaleLowerCase('vi');
    const visibleStudents = students.filter((student) => {
      const matchesName = student.name.toLocaleLowerCase('vi').includes(query);
      const matchesCategory = activeFilter === 'all' || student.category === activeFilter;
      return matchesName && matchesCategory;
    });
    wishesGrid.replaceChildren();
    visibleStudents.forEach((student) => {
      const originalIndex = students.indexOf(student);
      const card = document.createElement('article');
      card.className = 'wish-card';
      card.style.setProperty('--wish-tint', student.tint);
      card.style.setProperty('--wish-accent', student.accent);
      card.innerHTML = `<div class="wish-card-top"><span class="wish-number">WISH ${String(originalIndex + 1).padStart(2, '0')}</span><span class="wish-icon" aria-hidden="true">${student.icon}</span></div><h3></h3><p></p><div class="wish-card-bottom"><span class="wish-category">${categoryNames[student.category]}</span><button class="wish-open" type="button" aria-label="Đổi lời chúc cho ${student.name}" title="Nhận lời chúc khác">↻</button></div>`;
      $('h3', card).textContent = student.name;
      $('p', card).textContent = student.messages[0];
      card.dataset.studentIndex = String(originalIndex);
      $('.wish-open', card).addEventListener('click', () => {
        const next = ((wishIndex.get(originalIndex) || 0) + 1) % student.messages.length;
        wishIndex.set(originalIndex, next);
        $('p', card).textContent = student.messages[next];
        card.animate?.([{ opacity: .7, transform: 'translateY(3px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: reducedMotion ? 1 : 240, easing: 'ease-out' });
      });
      wishesGrid.append(card);
    });
    emptyWishes.hidden = visibleStudents.length > 0;
  }
  renderWishes();
  wishSearch.addEventListener('input', renderWishes);
  $$('.filter-button').forEach((button) => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    $$('.filter-button').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
    renderWishes();
  }));

  // Twenty interactive flower buds, one per recipient.
  const flowerGarden = $('#flowerGarden');
  const flowerColors = ['#e6a0b5', '#c8afdF', '#e9c47e', '#a7cbb6', '#d8a2c7', '#e9a8ab', '#b2c1e1'];
  students.forEach((student, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'garden-flower';
    button.style.setProperty('--flower-color', flowerColors[index % flowerColors.length]);
    button.style.setProperty('--flower-center', index % 2 === 0 ? '#f4d58f' : '#f9e9f0');
    button.setAttribute('aria-label', `Mở bông hoa của ${student.name}`);
    button.title = student.name;
    button.innerHTML = '<span class="flower-stem" aria-hidden="true"></span><span class="petals" aria-hidden="true"></span><span class="flower-name"></span>';
    $('.flower-name', button).textContent = student.name;
    button.addEventListener('click', () => {
      button.classList.add('is-bloomed');
      const message = student.messages[0];
      $('#gardenMessage').innerHTML = `<span class="garden-message-flower" aria-hidden="true">${student.icon}</span><span><strong></strong><small></small></span><span class="garden-heart" aria-hidden="true">♡</span>`;
      $('#gardenMessage strong').textContent = `Gửi ${student.name} ♡`;
      $('#gardenMessage small').textContent = message;
    });
    flowerGarden.append(button);
  });
  $('#bloomAll').addEventListener('click', () => {
    const flowers = $$('.garden-flower');
    flowers.forEach((flower, index) => {
      if (reducedMotion) flower.classList.add('is-bloomed');
      else window.setTimeout(() => flower.classList.add('is-bloomed'), index * 45);
    });
    showToast('Hai mươi bông hoa đã cùng nở cho 12A10! ✿');
  });

  // A playful, explicitly random fortune card — not a prediction.
  let previousFortune = -1;
  $('#fortuneButton').addEventListener('click', () => {
    let next = Math.floor(Math.random() * fortunes.length);
    if (fortunes.length > 1) while (next === previousFortune) next = Math.floor(Math.random() * fortunes.length);
    previousFortune = next;
    const fortune = fortunes[next];
    const card = $('#fortuneCard');
    card.classList.remove('is-changing');
    // Restart animation without a dependency on external libraries.
    void card.offsetWidth;
    $('#fortuneIcon').textContent = fortune.icon;
    $('#fortuneCategory').textContent = fortune.category;
    $('#fortuneMessage').textContent = fortune.text;
    card.classList.add('is-changing');
  });

  // Lightweight canvas fireworks; bursts stop automatically and pause while the tab is hidden.
  const canvas = $('#fireworksCanvas');
  const context = canvas.getContext ? canvas.getContext('2d') : null;
  const stopFireworksButton = $('#stopFireworks');
  let particles = [];
  let fireworksRunning = false;
  let rafId = null;
  let burstInterval = null;
  let fireworksTimeout = null;
  let lastFrame = 0;
  let reducedBurstTimeout = null;

  function resizeCanvas() {
    if (!context) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function burst(x, y, count = 50) {
    const palette = ['#e68ca6', '#d7b6ec', '#f8d78d', '#a5d7c1', '#fff4f6', '#c9c4ef'];
    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.1 + Math.random() * 4.1;
      particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 55 + Math.random() * 35, maxLife: 90, size: 1.3 + Math.random() * 2.2, color: palette[Math.floor(Math.random() * palette.length)], sparkle: Math.random() > .7 });
    }
  }
  function drawFireworks(timestamp) {
    if (!context) return;
    if (!lastFrame) lastFrame = timestamp;
    const elapsed = Math.min((timestamp - lastFrame) / 16.67, 2.2);
    lastFrame = timestamp;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    context.clearRect(0, 0, width, height);
    particles = particles.filter((particle) => particle.life > 0);
    particles.forEach((particle) => {
      particle.x += particle.vx * elapsed;
      particle.y += particle.vy * elapsed;
      particle.vy += .035 * elapsed;
      particle.vx *= .992;
      particle.life -= elapsed;
      context.globalAlpha = Math.max(0, Math.min(1, particle.life / particle.maxLife));
      context.fillStyle = particle.color;
      if (particle.sparkle) {
        context.font = `${particle.size * 4}px serif`;
        context.fillText('✦', particle.x, particle.y);
      } else {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }
    });
    context.globalAlpha = 1;
    if (fireworksRunning || particles.length > 0) rafId = window.requestAnimationFrame(drawFireworks);
    else {
      rafId = null;
      context.clearRect(0, 0, width, height);
    }
  }
  function scheduleBurst() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    burst(width * (.17 + Math.random() * .66), height * (.12 + Math.random() * .43), reducedMotion ? 12 : 52);
    if (!rafId) rafId = window.requestAnimationFrame(drawFireworks);
  }
  function stopFireworks() {
    fireworksRunning = false;
    window.clearInterval(burstInterval);
    window.clearTimeout(fireworksTimeout);
    window.clearTimeout(reducedBurstTimeout);
    burstInterval = null;
    fireworksTimeout = null;
    reducedBurstTimeout = null;
    stopFireworksButton.hidden = true;
    if (particles.length === 0 && context) {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = null;
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    }
  }
  function launchFireworks(options = {}) {
    if (!context) {
      showToast('Trình duyệt không hỗ trợ hiệu ứng pháo hoa ở thiết bị này.');
      return;
    }
    stopFireworks();
    resizeCanvas();
    if (document.hidden) return;
    if (reducedMotion) {
      scheduleBurst();
      stopFireworksButton.hidden = false;
      reducedBurstTimeout = window.setTimeout(stopFireworks, 850);
      return;
    }
    fireworksRunning = true;
    stopFireworksButton.hidden = false;
    scheduleBurst();
    burstInterval = window.setInterval(scheduleBurst, options.short ? 650 : 500);
    fireworksTimeout = window.setTimeout(stopFireworks, options.short ? 2400 : 4200);
  }
  $('#fireworksButton').addEventListener('click', () => launchFireworks());
  stopFireworksButton.addEventListener('click', stopFireworks);
  window.addEventListener('resize', () => { if (context) resizeCanvas(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopFireworks();
      if (audio && !audio.paused) audio.pause();
    }
  });

  // Return to the opening card without reloading the page.
  $('#reopenGift').addEventListener('click', () => {
    stopFireworks();
    intro.hidden = false;
    intro.classList.remove('is-closing');
    main.classList.remove('is-visible');
    siteHeader.hidden = true;
    closeLetter();
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });

  // Fail gracefully if any browser cannot decode the supplied audio format.
  if (!context) $('#fireworksButton').title = 'Canvas không được hỗ trợ trong trình duyệt này';
  syncMusicUI();
})();
