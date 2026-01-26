// ✅ CRITICAL FIX: Initialize app with proper order
function init() {
    console.log('🚀 Starting application initialization...');
    console.log('='.repeat(50));
    
    // Step 1: Load all presets FIRST
    loadAllPresets();
    
    // Step 2: Render app structure
    console.log('🎨 Rendering app structure...');
    renderApp();
    
    // Step 3: Update displays
    console.log('🔄 Updating displays...');
    updateCurrentPreset();
    updateModelDisplay();
    
    console.log('='.repeat(50));
    console.log('✅ Application initialized successfully!');
    console.log('📊 Global state check:');
    console.log('   - allPresets:', allPresets.length, 'items');
    console.log('   - selectedIdentity:', selectedIdentity?.name || 'None');
    console.log('   - selectedExpertise:', selectedExpertise?.name || 'None');
    console.log('   - selectedPersonality:', selectedPersonality?.name || 'None');
    console.log('='.repeat(50));
}

// Render complete app
function renderApp() {
    const app = document.getElementById('app');
    if (!app) {
        console.error('❌ CRITICAL: #app element not found!');
        return;
    }
    
    app.innerHTML = `
        ${renderSidebar()}
        ${renderMainContent()}
        ${renderModals()}
    `;
    
    console.log('✅ App HTML rendered');
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
    const btn = document.querySelector('.toggle-sidebar-btn i');
    if (sidebar.classList.contains('hidden')) {
        btn.className = 'fas fa-bars';
    } else {
        btn.className = 'fas fa-chevron-left';
    }
}

// Toggle compare mode
function toggleCompare() {
    compareMode = !compareMode;
    const btn = document.getElementById('compareBtn');
    const single = document.getElementById('singleModelView');
    const compare = document.getElementById('compareModelView');
    
    if (compareMode) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-exchange-alt"></i><span>Comparing</span>';
        single.classList.add('hidden');
        compare.classList.remove('hidden');
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-exchange-alt"></i><span>Compare</span>';
        single.classList.remove('hidden');
        compare.classList.add('hidden');
    }
    updateModelDisplay();
}

// Switch history tab
function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab-btn');
    const chatHistory = document.getElementById('chatHistory');
    const fileHistory = document.getElementById('fileHistory');
    
    // Remove all active classes
    tabs.forEach(t => t.classList.remove('active'));
    
    // Hide all content
    chatHistory.classList.add('hidden');
    fileHistory.classList.add('hidden');
    
    if (tab === 'chats') {
        tabs[0].classList.add('active');
        chatHistory.classList.remove('hidden');
    } else if (tab === 'files') {
        tabs[1].classList.add('active');
        fileHistory.classList.remove('hidden');
    }
}

// Send message
function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    
    if (!text && uploadedFiles.length === 0) {
        showToast('Please enter a message or attach files', 'warning');
        return;
    }
    
    const container = document.getElementById('messagesContainer');
    
    // Clear welcome message if exists
    if (container.querySelector('.fa-comment-alt')) {
        container.innerHTML = '';
    }
    
    // Create user message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    
    let messageContent = '';
    
    // Add file attachments if any
    if (uploadedFiles.length > 0) {
        messageContent += `<div style="margin-bottom: 8px; display: flex; flex-wrap: wrap; gap: 6px;">`;
        uploadedFiles.forEach(file => {
            const icon = getFileIcon(file.name);
            messageContent += `
                <div style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 8px; background: rgba(0, 0, 0, 0.2); border-radius: 6px; font-size: 12px;">
                    ${icon}
                    <span>${file.name}</span>
                </div>
            `;
        });
        messageContent += `</div>`;
    }
    
    // Add text message
    if (text) {
        messageContent += `<div>${text}</div>`;
    }
    
    // Store message first
    messages.push({ role: 'user', content: text });
    const msgIndex = messages.length - 1;
    
    userMsg.innerHTML = `
        <div class="message-content">
            ${messageContent}
            <button class="message-export-btn" onclick="exportSingleMessage(${msgIndex})" title="Export message">
                <i class="fas fa-download"></i>
            </button>
        </div>
    `;
    container.appendChild(userMsg);
    
    // Clear input and files
    input.value = '';
    input.style.height = 'auto';
    uploadedFiles = [];
    renderFilePreview();
    
    // Update character count
    const charCount = document.getElementById('charCount');
    if (charCount) charCount.textContent = '0';
    
    tokenUsage.input += Math.ceil(text.split(' ').length * 1.3);
    
    // Simulate AI response
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'message assistant';
        
        let aiResponse = '';
        
        if (uploadedFiles.length > 0) {
            aiResponse = `I've received your message`;
            if (text) aiResponse += ` and ${uploadedFiles.length} file(s)`;
            aiResponse += `. I'll analyze the content and provide you with insights.`;
        } else {
            aiResponse = `I received your message: "${text}". How can I help you analyze this?`;
        }
        
        // Store AI message first
        messages.push({ role: 'assistant', content: aiResponse });
        const aiMsgIndex = messages.length - 1;
        
        aiMsg.innerHTML = `
            <div class="message-content">
                ${aiResponse}
                <button class="message-export-btn" onclick="exportSingleMessage(${aiMsgIndex})" title="Export message">
                    <i class="fas fa-download"></i>
                </button>
            </div>
        `;
        container.appendChild(aiMsg);
        container.scrollTop = container.scrollHeight;
        
        tokenUsage.output += 50;
        tokenUsage.total = tokenUsage.input + tokenUsage.output;
        
        document.getElementById('totalTokens').textContent = tokenUsage.total.toLocaleString();
        document.getElementById('inputTokens').textContent = tokenUsage.input.toLocaleString();
        document.getElementById('outputTokens').textContent = tokenUsage.output.toLocaleString();
        
        // Add message to history
        const chatItem = document.createElement('div');
        chatItem.className = 'chat-item';
        chatItem.innerHTML = `
            <div style="font-weight: 600; font-size: 14px; color: #e2e8f0;">${text.substring(0, 50)}${text.length > 50 ? '...' : ''}</div>
            <div style="font-size: 12px; color: #94a3b8;">Just now</div>
        `;
        document.getElementById('chatHistory').prepend(chatItem);
    }, 1000);
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

// New chat
function newChat() {
    showConfirm(
        'Start a new chat? Current conversation will be saved to history.',
        () => {
            messages = [];
            uploadedFiles = [];
            renderFilePreview();
            document.getElementById('messagesContainer').innerHTML = `
                <div style="text-align: center; padding: 40px; color: #94a3b8;">
                    <i class="fas fa-comment-alt" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                    <p>Start a conversation...</p>
                </div>
            `;
            showToast('New chat started', 'success');
        }
    );
}

// Update model display
function updateModelDisplay() {
    const model = models.find(m => m.id === selectedModel);
    const modelB = models.find(m => m.id === secondModel);
    
    if (model) {
        document.getElementById('modelIcon').textContent = model.icon;
        document.getElementById('modelName').textContent = model.name;
        document.getElementById('modelAIcon').textContent = model.icon;
        document.getElementById('modelAName').textContent = model.name.split(' ')[0];
    }
    
    if (modelB) {
        document.getElementById('modelBIcon').textContent = modelB.icon;
        document.getElementById('modelBName').textContent = modelB.name.split(' ')[0];
    }
}

// Show/hide modals
function showProfileModal() {
    document.getElementById('profileModal').classList.add('show');
}

function hideProfileModal() {
    document.getElementById('profileModal').classList.remove('show');
}

// ✅ CRITICAL: Initialize on load with delay for DOM ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM Content Loaded');
    
    // Small delay to ensure all scripts loaded
    setTimeout(() => {
        init();
    }, 100);
});