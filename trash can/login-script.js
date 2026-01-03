// Login Page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const loginForm = document.getElementById("loginForm");
  const togglePasswordBtn = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  const forgotPasswordLink = document.querySelector(".forgot-password");
  const forgotPasswordModal = document.getElementById("forgotPasswordModal");
  const closeModalBtn = document.querySelector(".close-modal");
  const resetPasswordForm = document.getElementById("resetPasswordForm");

  // Toggle password visibility
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener("click", function () {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      // Toggle icon
      const icon = this.querySelector("i");
      icon.classList.toggle("fa-eye");
      icon.classList.toggle("fa-eye-slash");
    });
  }

  // Form submission - Login
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const rememberMe = document.getElementById("rememberMe").checked;

      // Simple validation
      if (!email || !password) {
        showAlert("error", "Harap isi semua bidang yang diperlukan.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showAlert("error", "Harap masukkan alamat email yang valid.");
        return;
      }

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // For demo purposes, show success message
        showAlert("success", "Login berhasil! Mengarahkan ke dashboard...");

        // Redirect to main page (in real app, would redirect to dashboard)
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      }, 1500);
    });
  }

  // Social login buttons
  const googleBtn = document.querySelector(".google-btn");
  const facebookBtn = document.querySelector(".facebook-btn");

  if (googleBtn) {
    googleBtn.addEventListener("click", function () {
      showAlert("info", "Login dengan Google akan dibuka di jendela baru.");
      // In a real app, this would trigger OAuth flow
    });
  }

  if (facebookBtn) {
    facebookBtn.addEventListener("click", function () {
      showAlert("info", "Login dengan Facebook akan dibuka di jendela baru.");
      // In a real app, this would trigger OAuth flow
    });
  }

  // Forgot password modal
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", function (e) {
      e.preventDefault();
      forgotPasswordModal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  }

  // Close modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      forgotPasswordModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }

  // Close modal when clicking outside
  forgotPasswordModal.addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });

  // Reset password form
  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("resetEmail").value;

      if (!email) {
        showAlert("error", "Harap masukkan alamat email Anda.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showAlert("error", "Harap masukkan alamat email yang valid.");
        return;
      }

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Show success message
        showAlert("success", `Link reset kata sandi telah dikirim ke ${email}. Silakan periksa email Anda.`);

        // Close modal
        forgotPasswordModal.classList.add("hidden");
        document.body.style.overflow = "auto";

        // Reset form
        resetPasswordForm.reset();
      }, 1500);
    });
  }

  // Alert function
  function showAlert(type, message) {
    // Remove any existing alerts
    const existingAlert = document.querySelector(".alert");
    if (existingAlert) {
      existingAlert.remove();
    }

    // Create alert element
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;

    // Set icon based on type
    let icon = "info-circle";
    if (type === "success") icon = "check-circle";
    if (type === "error") icon = "exclamation-circle";
    if (type === "warning") icon = "exclamation-triangle";

    alert.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
            <button class="alert-close">&times;</button>
        `;

    // Add to page
    document.body.appendChild(alert);

    // Show alert with animation
    setTimeout(() => {
      alert.classList.add("show");
    }, 10);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (alert.parentNode) {
        alert.classList.remove("show");
        setTimeout(() => {
          if (alert.parentNode) alert.remove();
        }, 300);
      }
    }, 5000);

    // Close button functionality
    const closeBtn = alert.querySelector(".alert-close");
    closeBtn.addEventListener("click", function () {
      alert.classList.remove("show");
      setTimeout(() => {
        if (alert.parentNode) alert.remove();
      }, 300);
    });
  }

  // Add CSS for alerts
  const alertStyles = document.createElement("style");
  alertStyles.textContent = `
        .alert {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: var(--border-radius);
            display: flex;
            align-items: center;
            gap: 12px;
            max-width: 400px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            z-index: 3000;
            transform: translateX(120%);
            transition: transform 0.3s ease;
        }
        
        .alert.show {
            transform: translateX(0);
        }
        
        .alert-success {
            background-color: #d4edda;
            color: #155724;
            border-left: 4px solid #28a745;
        }
        
        .alert-error {
            background-color: #f8d7da;
            color: #721c24;
            border-left: 4px solid #dc3545;
        }
        
        .alert-warning {
            background-color: #fff3cd;
            color: #856404;
            border-left: 4px solid #ffc107;
        }
        
        .alert-info {
            background-color: #d1ecf1;
            color: #0c5460;
            border-left: 4px solid #17a2b8;
        }
        
        .alert i {
            font-size: 1.2rem;
        }
        
        .alert-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            line-height: 1;
            color: inherit;
            opacity: 0.7;
            cursor: pointer;
            margin-left: auto;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .alert-close:hover {
            opacity: 1;
        }
    `;
  document.head.appendChild(alertStyles);
});
