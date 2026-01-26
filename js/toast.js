// Toast Notification System
function showToast(message, type = 'success', duration = 3000) {
    // Remove existing toasts
    const existing = document.querySelectorAll('.custom-toast');
    existing.forEach(t => t.remove());
    
    // Create toast container
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    
    // Icon based on type
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    // Colors based on type
    const colors = {
        success: { bg: 'rgba(34, 197, 94, 0.15)', border: '#22c55e', icon: '#22c55e' },
        error: { bg: 'rgba(239, 68, 68, 0.15)', border: '#ef4444', icon: '#ef4444' },
        warning: { bg: 'rgba(245, 158, 11, 0.15)', border: '#f59e0b', icon: '#f59e0b' },
        info: { bg: 'rgba(59, 130, 246, 0.15)', border: '#3b82f6', icon: '#3b82f6' }
    };
    
    const color = colors[type] || colors.success;
    
    toast.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        background: ${color.bg};
        backdrop-filter: blur(12px);
        border: 2px solid ${color.border};
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 9999;
        min-width: 300px;
        max-width: 500px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.3s ease-out;
        font-family: 'Inter', sans-serif;
    `;
    
    toast.innerHTML = `
        <div style="font-size: 24px; flex-shrink: 0;">${icons[type]}</div>
        <div style="flex: 1; color: #f1f5f9; font-size: 14px; font-weight: 500; line-height: 1.5;">${message}</div>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 18px; padding: 0; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 4px; transition: all 0.2s;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add animation styles if not exists
    if (!document.getElementById('toast-animations')) {
        const style = document.createElement('style');
        style.id = 'toast-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
            .custom-toast button:hover {
                background: rgba(100, 116, 139, 0.2) !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Auto remove after duration
    if (duration > 0) {
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
}

// Confirmation Dialog
function showConfirm(message, onConfirm, onCancel) {
    // Remove existing confirms
    const existing = document.querySelectorAll('.custom-confirm-overlay');
    existing.forEach(c => c.remove());
    
    const overlay = document.createElement('div');
    overlay.className = 'custom-confirm-overlay';
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.2s ease-out;
        font-family: 'Inter', sans-serif;
    `;
    
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        background: #0f172a;
        border: 1px solid rgba(100, 116, 139, 0.5);
        border-radius: 16px;
        padding: 24px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: scaleIn 0.2s ease-out;
    `;
    
    dialog.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <div style="font-size: 32px;">⚠️</div>
            <div style="font-size: 18px; font-weight: 700; color: #f1f5f9;">Confirm Action</div>
        </div>
        <div style="color: #cbd5e1; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">${message}</div>
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <button class="confirm-cancel-btn" style="padding: 10px 20px; background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(100, 116, 139, 0.5); color: #cbd5e1; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500; transition: all 0.2s;">
                Cancel
            </button>
            <button class="confirm-ok-btn" style="padding: 10px 20px; background: linear-gradient(to right, #ef4444, #dc2626); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500; transition: all 0.2s;">
                Confirm
            </button>
        </div>
    `;
    
    // Add animations
    if (!document.getElementById('confirm-animations')) {
        const style = document.createElement('style');
        style.id = 'confirm-animations';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes scaleIn {
                from {
                    transform: scale(0.9);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            .confirm-cancel-btn:hover {
                background: rgba(30, 41, 59, 0.8) !important;
            }
            .confirm-ok-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
            }
        `;
        document.head.appendChild(style);
    }
    
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    
    // Event listeners
    const cancelBtn = dialog.querySelector('.confirm-cancel-btn');
    const okBtn = dialog.querySelector('.confirm-ok-btn');
    
    cancelBtn.onclick = () => {
        overlay.remove();
        if (onCancel) onCancel();
    };
    
    okBtn.onclick = () => {
        overlay.remove();
        if (onConfirm) onConfirm();
    };
    
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            overlay.remove();
            if (onCancel) onCancel();
        }
    };
}

// Input Prompt Dialog
function showPrompt(message, defaultValue = '', onConfirm, onCancel) {
    const existing = document.querySelectorAll('.custom-prompt-overlay');
    existing.forEach(p => p.remove());
    
    const overlay = document.createElement('div');
    overlay.className = 'custom-prompt-overlay';
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.2s ease-out;
        font-family: 'Inter', sans-serif;
    `;
    
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        background: #0f172a;
        border: 1px solid rgba(100, 116, 139, 0.5);
        border-radius: 16px;
        padding: 24px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: scaleIn 0.2s ease-out;
    `;
    
    dialog.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <div style="font-size: 32px;">✨</div>
            <div style="font-size: 18px; font-weight: 700; color: #f1f5f9;">Input Required</div>
        </div>
        <div style="color: #cbd5e1; font-size: 14px; line-height: 1.6; margin-bottom: 16px;">${message}</div>
        <input type="text" class="prompt-input" value="${defaultValue}" style="width: 100%; padding: 12px 16px; background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 8px; color: #f1f5f9; font-size: 14px; margin-bottom: 24px; outline: none; transition: all 0.2s;">
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <button class="prompt-cancel-btn" style="padding: 10px 20px; background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(100, 116, 139, 0.5); color: #cbd5e1; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500; transition: all 0.2s;">
                Cancel
            </button>
            <button class="prompt-ok-btn" style="padding: 10px 20px; background: linear-gradient(to right, #a855f7, #3b82f6); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500; transition: all 0.2s;">
                OK
            </button>
        </div>
    `;
    
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    
    const input = dialog.querySelector('.prompt-input');
    const cancelBtn = dialog.querySelector('.prompt-cancel-btn');
    const okBtn = dialog.querySelector('.prompt-ok-btn');
    
    // Focus input
    setTimeout(() => input.focus(), 100);
    
    // Input styling on focus
    input.onfocus = () => {
        input.style.borderColor = '#a78bfa';
        input.style.boxShadow = '0 0 0 2px rgba(168, 85, 247, 0.2)';
    };
    input.onblur = () => {
        input.style.borderColor = 'rgba(100, 116, 139, 0.5)';
        input.style.boxShadow = 'none';
    };
    
    const handleOk = () => {
        const value = input.value.trim();
        overlay.remove();
        if (onConfirm) onConfirm(value);
    };
    
    cancelBtn.onclick = () => {
        overlay.remove();
        if (onCancel) onCancel();
    };
    
    okBtn.onclick = handleOk;
    
    input.onkeypress = (e) => {
        if (e.key === 'Enter') handleOk();
    };
    
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            overlay.remove();
            if (onCancel) onCancel();
        }
    };
}