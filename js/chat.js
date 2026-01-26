// Render chat area
function renderChatArea() {
    return `
        <div class="messages-area" id="messagesArea">
            <div class="messages-container" id="messagesContainer">
                <div style="text-align: center; padding: 40px; color: #94a3b8;">
                    <i class="fas fa-comment-alt" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                    <p>Start a conversation...</p>
                </div>
            </div>
        </div>
        
        <div class="input-area">
            <div class="input-container">
                <!-- Action Buttons Row -->
                <div class="action-buttons-row">
                    <button class="action-btn" onclick="showUnifiedModal('preset')" title="Select Preset">
                        <span style="font-size: 20px;" id="presetIcon">📊</span>
                        <span id="currentPreset">Data Analyst</span>
                    </button>
                    
                    <button class="action-btn upload-action-btn" onclick="document.getElementById('fileInput').click()" title="Upload Files">
                        <i class="fas fa-paperclip"></i>
                        <span>Attach Files</span>
                    </button>
                </div>
                
                <!-- File Preview Area -->
                <div id="filePreviewArea" class="file-preview-area hidden"></div>
                
                <!-- Input Row -->
                <div class="input-row">
                    <input type="file" id="fileInput" multiple accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.png,.jpg,.jpeg" style="display: none;" onchange="handleFileUpload(event)">
                    
                    <textarea 
                        id="messageInput" 
                        class="message-input" 
                        placeholder="Ask me anything about your documents..." 
                        rows="1"
                        onkeydown="handleInputKeydown(event)"
                        oninput="autoResizeTextarea(this)"></textarea>
                    
                    <button class="send-btn" onclick="sendMessage()">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
                
                <!-- Character/Token Counter -->
                <div class="input-footer">
                    <div class="input-hint">
                        <i class="fas fa-info-circle"></i>
                        <span>Press <kbd>Shift + Enter</kbd> for new line, <kbd>Enter</kbd> to send</span>
                    </div>
                    <div class="char-counter">
                        <span id="charCount">0</span> characters
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Auto-resize textarea
function autoResizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
    
    // Update character count
    const charCount = document.getElementById('charCount');
    if (charCount) {
        charCount.textContent = textarea.value.length;
    }
}

// Handle Enter key
function handleInputKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Export single message
function exportSingleMessage(messageIndex) {
    if (!messages[messageIndex]) {
        showToast('Message not found', 'warning');
        return;
    }
    
    const message = messages[messageIndex];
    const timestamp = new Date().toISOString().split('T')[0];
    const content = `Message Export - ${timestamp}\n\n${message.role.toUpperCase()}: ${message.content}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `message-${messageIndex}-${timestamp}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('Message exported', 'success', 2000);
}

// Handle file upload with preview
let uploadedFiles = [];

function handleFileUpload(event) {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;
    
    uploadedFiles = [...uploadedFiles, ...files];
    renderFilePreview();
    
    showToast(`${files.length} file(s) attached`, 'success', 2000);
    event.target.value = '';
}

function renderFilePreview() {
    const previewArea = document.getElementById('filePreviewArea');
    if (!previewArea) return;
    
    if (uploadedFiles.length === 0) {
        previewArea.classList.add('hidden');
        return;
    }
    
    previewArea.classList.remove('hidden');
    previewArea.innerHTML = '';
    
    uploadedFiles.forEach((file, index) => {
        const fileCard = document.createElement('div');
        fileCard.className = 'file-preview-card';
        
        const icon = getFileIcon(file.name);
        const size = (file.size / 1024).toFixed(1);
        
        fileCard.innerHTML = `
            <div class="file-preview-icon">${icon}</div>
            <div class="file-preview-info">
                <div class="file-preview-name">${file.name}</div>
                <div class="file-preview-size">${size} KB</div>
            </div>
            <button class="file-preview-remove" onclick="removeFile(${index})" title="Remove">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        previewArea.appendChild(fileCard);
    });
}

function removeFile(index) {
    uploadedFiles.splice(index, 1);
    renderFilePreview();
    showToast('File removed', 'info', 2000);
}

function getFileIcon(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const icons = {
        pdf: '<i class="fas fa-file-pdf" style="color: #ef4444;"></i>',
        doc: '<i class="fas fa-file-word" style="color: #3b82f6;"></i>',
        docx: '<i class="fas fa-file-word" style="color: #3b82f6;"></i>',
        txt: '<i class="fas fa-file-alt" style="color: #64748b;"></i>',
        csv: '<i class="fas fa-file-csv" style="color: #22c55e;"></i>',
        xlsx: '<i class="fas fa-file-excel" style="color: #22c55e;"></i>',
        xls: '<i class="fas fa-file-excel" style="color: #22c55e;"></i>',
        png: '<i class="fas fa-file-image" style="color: #a78bfa;"></i>',
        jpg: '<i class="fas fa-file-image" style="color: #a78bfa;"></i>',
        jpeg: '<i class="fas fa-file-image" style="color: #a78bfa;"></i>'
    };
    return icons[ext] || '<i class="fas fa-file" style="color: #94a3b8;"></i>';
}