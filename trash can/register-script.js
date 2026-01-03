// Register Page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const registerForm = document.getElementById("registerForm");
  const toggleRegPasswordBtn = document.getElementById("toggleRegPassword");
  const passwordInput = document.getElementById("registerPassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const nextStepBtn = document.getElementById("nextStepBtn");
  const prevStepBtn = document.getElementById("prevStepBtn");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const userTypeOptions = document.querySelectorAll(".user-type-option");
  const userTypeInput = document.getElementById("userType");
  const successModal = document.getElementById("successModal");
  const closeModalBtn = document.querySelector(".close-modal");
  const goToDashboardBtn = document.getElementById("goToDashboardBtn");
  const takeTestBtn = document.getElementById("takeTestBtn");

  // State
  let currentStep = 1;

  // Toggle password visibility
  if (toggleRegPasswordBtn && passwordInput) {
    toggleRegPasswordBtn.addEventListener("click", function () {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      // Toggle icon
      const icon = this.querySelector("i");
      icon.classList.toggle("fa-eye");
      icon.classList.toggle("fa-eye-slash");
    });
  }

  // Password strength indicator
  if (passwordInput) {
    passwordInput.addEventListener("input", function () {
      checkPasswordStrength(this.value);
      validatePasswordMatch();
    });
  }

  // Confirm password validation
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("input", validatePasswordMatch);
  }

  // User type selection
  userTypeOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove active class from all options
      userTypeOptions.forEach((opt) => opt.classList.remove("active"));

      // Add active class to clicked option
      this.classList.add("active");

      // Update hidden input value
      const value = this.getAttribute("data-value");
      userTypeInput.value = value;
    });
  });

  // Step navigation
  if (nextStepBtn) {
    nextStepBtn.addEventListener("click", function () {
      // Validate step 1 before proceeding
      if (validateStep1()) {
        currentStep = 2;
        updateStepDisplay();
      }
    });
  }

  if (prevStepBtn) {
    prevStepBtn.addEventListener("click", function () {
      currentStep = 1;
      updateStepDisplay();
    });
  }

  // Form submission
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validate all fields
      if (!validateStep1() || !validateStep2()) {
        showAlert("error", "Harap lengkapi semua bidang yang diperlukan.");
        return;
      }

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Membuat akun...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Show success modal
        successModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }, 1500);
    });
  }

  // Social login buttons
  const googleBtn = document.querySelector(".google-btn");
  const facebookBtn = document.querySelector(".facebook-btn");

  if (googleBtn) {
    googleBtn.addEventListener("click", function () {
      showAlert("info", "Daftar dengan Google akan dibuka di jendela baru.");
      // In a real app, this would trigger OAuth flow
    });
  }

  if (facebookBtn) {
    facebookBtn.addEventListener("click", function () {
      showAlert("info", "Daftar dengan Facebook akan dibuka di jendela baru.");
      // In a real app, this would trigger OAuth flow
    });
  }

  // Success modal actions
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      successModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }

  // Close modal when clicking outside
  successModal.addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });

  if (goToDashboardBtn) {
    goToDashboardBtn.addEventListener("click", function () {
      // In a real app, would redirect to user dashboard
      window.location.href = "index.html";
    });
  }

  if (takeTestBtn) {
    takeTestBtn.addEventListener("click", function () {
      // Redirect to test page
      window.location.href = "index.html#test";
    });
  }

  // Validation functions
  function validateStep1() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const acceptTerms = document.getElementById("acceptTerms").checked;

    // Check required fields
    if (!fullName || !email || !password || !confirmPassword) {
      showAlert("error", "Harap isi semua bidang yang diperlukan.");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("error", "Harap masukkan alamat email yang valid.");
      return false;
    }

    // Password length
    if (password.length < 8) {
      showAlert("error", "Kata sandi harus minimal 8 karakter.");
      return false;
    }

    // Password match
    if (password !== confirmPassword) {
      showAlert("error", "Kata sandi tidak cocok.");
      return false;
    }

    // Terms acceptance
    if (!acceptTerms) {
      showAlert("error", "Anda harus menyetujui Syarat & Ketentuan.");
      return false;
    }

    return true;
  }

  function validateStep2() {
    const educationLevel = document.getElementById("educationLevel").value;
    const studyGoal = document.getElementById("studyGoal").value;

    // Check required fields
    if (!educationLevel || !studyGoal) {
      showAlert("error", "Harap lengkapi profil Anda.");
      return false;
    }

    return true;
  }

  function validatePasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword && password !== confirmPassword) {
      confirmPasswordInput.style.borderColor = "#e63946";
      return false;
    } else if (confirmPassword) {
      confirmPasswordInput.style.borderColor = "#4CAF50";
      return true;
    } else {
      confirmPasswordInput.style.borderColor = "";
      return null;
    }
  }

  function checkPasswordStrength(password) {
    const strengthMeter = document.getElementById("passwordStrength");
    const strengthText = document.getElementById("passwordStrengthText");

    let strength = 0;
    let color = "#e63946";
    let text = "Lemah";

    // Length check
    if (password.length >= 8) strength += 25;

    // Contains lowercase and uppercase
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;

    // Contains numbers
    if (/\d/.test(password)) strength += 25;

    // Contains special characters
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;

    // Update meter and text
    strengthMeter.style.width = `${strength}%`;

    if (strength <= 25) {
      color = "#e63946";
      text = "Lemah";
    } else if (strength <= 50) {
      color = "#ff9f1c";
      text = "Cukup";
    } else if (strength <= 75) {
      color = "#ffd166";
      text = "Baik";
    } else {
      color = "#4CAF50";
      text = "Kuat";
    }

    strengthMeter.style.backgroundColor = color;
    strengthText.textContent = `Kekuatan kata sandi: ${text}`;
    strengthText.style.color = color;
  }

  function updateStepDisplay() {
    if (currentStep === 1) {
      step1.classList.remove("hidden");
      step2.classList.add("hidden");
    } else {
      step1.classList.add("hidden");
      step2.classList.remove("hidden");
    }
  }

  // Alert function (same as login)
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

  // Add CSS for alerts (if not already added)
  if (!document.querySelector("#alert-styles")) {
    const alertStyles = document.createElement("style");
    alertStyles.id = "alert-styles";
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
  }
});
