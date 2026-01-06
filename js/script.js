AOS.init({
            duration: 500,
            once: false
        });

        // Particles.js for background effect
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffd700' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#ffd700', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
                modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });

        var typed = new Typed('#typed', {
            strings: ['Selamat Datang di CyberEdu', 'Pelajari Keamanan Siber', 'Interaktif & Premium'],
            typeSpeed: 70,
            backSpeed: 30,
            loop: true,
            cursorChar: '|', // Pastikan karakter kursor adalah '|'
            showCursor: true, // Pastikan kursor ditampilkan
            fadeOut: false, // Nonaktifkan fade-out jika ada
        });

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const toggleBtn = document.querySelector('.dark-mode-toggle i');
            if (document.body.classList.contains('dark-mode')) {
                toggleBtn.classList.remove('fa-moon');
                toggleBtn.classList.add('fa-sun');
            } else {
                toggleBtn.classList.remove('fa-sun');
                toggleBtn.classList.add('fa-moon');
            }
        }

        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        function showInfo(event) {
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            let infoId = '';
            if (x < rect.width / 2 && y < rect.height / 2) infoId = 'auth';
            else if (x >= rect.width / 2 && y < rect.height / 2) infoId = 'cia';
            else if (x < rect.width / 2 && y >= rect.height / 2) infoId = 'password';
            else infoId = 'network';
            const info = document.getElementById(infoId);
            info.style.opacity = '1';
            info.style.visibility = 'visible';
            info.style.transform = 'scale(1)';
            info.style.left = `${x - 200}px`;
            info.style.top = `${y - 50}px`;
        }

        function hideInfo() {
            const infos = document.querySelectorAll('.hover-info');
            infos.forEach(info => {
                info.style.opacity = '0';
                info.style.visibility = 'hidden';
                info.style.transform = 'scale(0.8)';
            });
        }

        // Array untuk melacak status challenge (false = belum selesai, true = selesai)
        let ctfCompleted = [false, false, false, false, false, false, false, false, false, false]; // 10 challenge

        // Fungsi untuk memeriksa apakah semua challenge selesai dan tampilkan section
        function checkAllCTFCompleted() {
            if (ctfCompleted.every(status => status === true)) {
                const section = document.getElementById('thank-you-section');
                section.style.display = 'block'; // Tampilkan section
                AOS.refresh(); // Refresh AOS untuk animasi fade-in
                // Scroll ke section jika diinginkan
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Update fungsi checkCTF1 hingga checkCTF10 untuk melacak status
        function checkCTF1() {
            const flag = document.getElementById('ctf1').value;
            const result = document.getElementById('ctf1Result');
            if (flag === 'CyberEdu{1n5p3ct_me_123}') {
                result.innerHTML = '<span class="text-success">$ Flag benar! Selamat! <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[0] = true; // Mark challenge 1 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-warning">$ Flag salah. Coba lagi. <i class="fas fa-exclamation-triangle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        function checkCTF2() {
            const username = document.getElementById('ctf2Username').value;
            const password = document.getElementById('ctf2Password').value;
            const result = document.getElementById('ctf2Result');
            if (username === 'admin' && password === "' OR '1'='1") {
                result.innerHTML = '<span class="text-success">$ Login berhasil! Flag: CyberEdu{sql_injection_789} <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[1] = true; // Mark challenge 2 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-danger">$ Login gagal. Gunakan payload SQL injection. <i class="fas fa-times-circle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        function checkCTF3() {
            const flag = document.getElementById('ctf3').value;
            const result = document.getElementById('ctf3Result');
            if (flag === 'CyberEdu{rot13_cipher_456}') {
                result.innerHTML = '<span class="text-success">$ Flag benar! Selamat! <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[2] = true; // Mark challenge 3 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-warning">$ Flag salah. Coba lagi. <i class="fas fa-exclamation-triangle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        function checkCTF4() {
            const flag = document.getElementById('ctf4').value;
            const result = document.getElementById('ctf4Result');
            if (flag === 'CyberEdu{base64_decode_123}') {
                result.innerHTML = '<span class="text-success">$ Flag benar! Selamat! <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[3] = true; // Mark challenge 4 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-warning">$ Flag salah. Coba lagi. <i class="fas fa-exclamation-triangle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        function checkCTF5() {
            const flag = document.getElementById('ctf5').value;
            const result = document.getElementById('ctf5Result');
            if (flag === 'CyberEdu{hex_to_text_456}') {
                result.innerHTML = '<span class="text-success">$ Flag benar! Selamat! <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[4] = true; // Mark challenge 5 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-warning">$ Flag salah. Coba lagi. <i class="fas fa-exclamation-triangle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        function checkCTF6() {
            const flag = document.getElementById('ctf6').value;
            const result = document.getElementById('ctf6Result');
            if (flag === 'CyberEdu{character_mind_123}') {
                result.innerHTML = '<span class="text-success">$ Flag benar! Selamat! <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[5] = true; // Mark challenge 6 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-warning">$ Flag salah. Coba lagi. <i class="fas fa-exclamation-triangle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        function checkCTF7() {
            const flag = document.getElementById('ctf7').value;
            const result = document.getElementById('ctf7Result');
            if (flag === 'CyberEdu{27}') {
                result.innerHTML = '<span class="text-success">$ Flag benar! Selamat! <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[6] = true; // Mark challenge 7 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-warning">$ Flag salah. Coba lagi. <i class="fas fa-exclamation-triangle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        function checkCTF8() {
            const flag = document.getElementById('ctf8').value;
            const result = document.getElementById('ctf8Result');
            if (flag === 'CyberEdu{binary}') {
                result.innerHTML = '<span class="text-success">$ Flag benar! Selamat! <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[7] = true; // Mark challenge 8 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-warning">$ Flag salah. Coba lagi. <i class="fas fa-exclamation-triangle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        function checkCTF9() {
            const flag = document.getElementById('ctf9').value;
            const result = document.getElementById('ctf9Result');
            if (flag === 'CyberEdu{source_code_789}') {
                result.innerHTML = '<span class="text-success">$ Flag benar! Selamat! <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[8] = true; // Mark challenge 9 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-warning">$ Flag salah. Coba lagi. <i class="fas fa-exclamation-triangle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        function checkCTF10() {
            const flag = document.getElementById('ctf10').value;
            const result = document.getElementById('ctf10Result');
            if (flag === 'CyberEdu{rot13_again_123}') {
                result.innerHTML = '<span class="text-success">$ Flag benar! Selamat! <i class="fas fa-flag"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
                ctfCompleted[9] = true; // Mark challenge 10 sebagai selesai
                checkAllCTFCompleted(); // Cek apakah semua selesai
            } else {
                result.innerHTML = '<span class="text-warning">$ Flag salah. Coba lagi. <i class="fas fa-exclamation-triangle"></i></span>';
                result.style.animation = 'popIn 0.5s ease-out';
            }
        }

        // Parallax effect on scroll
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxBg = document.querySelector('.parallax-bg');
            if (parallaxBg) {
                parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 0, 0, 0.8)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });