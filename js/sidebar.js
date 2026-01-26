// Render sidebar HTML
function renderSidebar() {
    return `
        <aside id="sidebar" class="sidebar">
            <!-- App Title in Sidebar -->
            <div class="sidebar-header">
                <div class="sidebar-app-title">Document Analysis Chat</div>
                <button class="toggle-sidebar-btn" onclick="toggleSidebar()">
                    <i class="fas fa-chevron-left"></i>
                </button>
            </div>
            
            <!-- Workspace Section -->
            <div class="workspace-section">
                <div class="workspace-header">
                    <div class="workspace-title">Workspace</div>
                </div>
                <div class="workspace-selector" onclick="showWorkspaceModal()">
                    <div class="workspace-icon">💼</div>
                    <div class="workspace-info">
                        <div class="workspace-name">My Documents</div>
                        <div class="workspace-members">3 members</div>
                    </div>
                    <i class="fas fa-chevron-down" style="color: #64748b; font-size: 12px;"></i>
                </div>
            </div>
            
            <div class="history-tabs">
                <button class="tab-btn active" onclick="switchTab('chats')">
                    <i class="fas fa-comment-alt"></i> Chats
                </button>
                <button class="tab-btn" onclick="switchTab('files')">
                    <i class="fas fa-file"></i> Files
                </button>
            </div>
            
            <!-- Chat Section Header with New Chat Button -->
            <div class="chat-section-header">
                <div class="chat-section-title">Recent Chats</div>
                <button class="new-chat-btn" onclick="newChat()">
                    <i class="fas fa-plus"></i>
                    New
                </button>
            </div>
            
            <div class="history-content">
                <div id="chatHistory">
                    <div class="chat-item">
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-weight: 600; font-size: 14px; color: #e2e8f0;">Financial Report Analysis</div>
                            <div style="font-size: 12px; color: #94a3b8;">2 hours ago</div>
                        </div>
                        <button class="chat-export-btn" onclick="exportChatHistory(0)" title="Export">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                    
                    <div class="chat-item">
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-weight: 600; font-size: 14px; color: #e2e8f0;">Marketing Strategy Review</div>
                            <div style="font-size: 12px; color: #94a3b8;">5 hours ago</div>
                        </div>
                        <button class="chat-export-btn" onclick="exportChatHistory(1)" title="Export">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                    
                    <div class="chat-item">
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-weight: 600; font-size: 14px; color: #e2e8f0;">Legal Document Review</div>
                            <div style="font-size: 12px; color: #94a3b8;">Yesterday</div>
                        </div>
                        <button class="chat-export-btn" onclick="exportChatHistory(2)" title="Export">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
                
                <div id="fileHistory" class="hidden">
                    <!-- File Search -->
                    <div class="file-search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" id="fileSearchInput" placeholder="Search files..." oninput="searchFiles(this.value)">
                    </div>
                    
                    <div class="file-item">
                        <div class="file-icon">
                            <i class="fas fa-file-pdf" style="color: #ef4444;"></i>
                        </div>
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-weight: 600; font-size: 14px; color: #e2e8f0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Q4_Report.pdf</div>
                            <div style="font-size: 12px; color: #94a3b8;">2.4 MB • 2 hours ago</div>
                        </div>
                        <div class="file-item-actions">
                            <button class="file-action-btn" onclick="previewFile(0)" title="Preview">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="file-action-btn" onclick="downloadFile(0)" title="Download">
                                <i class="fas fa-download"></i>
                            </button>
                            <button class="file-action-btn file-action-delete" onclick="deleteFile(0)" title="Delete">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="file-item">
                        <div class="file-icon">
                            <i class="fas fa-file-word" style="color: #3b82f6;"></i>
                        </div>
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-weight: 600; font-size: 14px; color: #e2e8f0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Market_Analysis.docx</div>
                            <div style="font-size: 12px; color: #94a3b8;">1.8 MB • Yesterday</div>
                        </div>
                        <div class="file-item-actions">
                            <button class="file-action-btn" onclick="previewFile(1)" title="Preview">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="file-action-btn" onclick="downloadFile(1)" title="Download">
                                <i class="fas fa-download"></i>
                            </button>
                            <button class="file-action-btn file-action-delete" onclick="deleteFile(1)" title="Delete">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="file-item">
                        <div class="file-icon">
                            <i class="fas fa-file-excel" style="color: #22c55e;"></i>
                        </div>
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-weight: 600; font-size: 14px; color: #e2e8f0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Sales_Data_2024.xlsx</div>
                            <div style="font-size: 12px; color: #94a3b8;">856 KB • 3 days ago</div>
                        </div>
                        <div class="file-item-actions">
                            <button class="file-action-btn" onclick="previewFile(2)" title="Preview">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="file-action-btn" onclick="downloadFile(2)" title="Download">
                                <i class="fas fa-download"></i>
                            </button>
                            <button class="file-action-btn file-action-delete" onclick="deleteFile(2)" title="Delete">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Upload New File -->
                    <button class="upload-file-btn" onclick="uploadNewFile()">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <span>Upload New File</span>
                    </button>
                </div>
            </div>
            
            <div class="sidebar-bottom">
                
                <div class="token-usage">
                    <div class="token-header">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <i class="fas fa-sparkles" style="color: #fbbf24; font-size: 12px;"></i>
                            <span style="font-size: 12px; color: #94a3b8;">Total Tokens</span>
                        </div>
                        <span id="totalTokens" style="font-size: 14px; font-weight: 700; color: #fbbf24;">0</span>
                    </div>
                    <div class="token-stats">
                        <div class="token-in">
                            <div class="token-dot"></div>
                            <span>In: <span id="inputTokens">0</span></span>
                        </div>
                        <div class="token-out">
                            <div class="token-dot"></div>
                            <span>Out: <span id="outputTokens">0</span></span>
                        </div>
                    </div>
                </div>
                
                <div class="user-profile">
                    <button class="profile-btn" onclick="showProfileModal()">
                        <div class="user-avatar">👤</div>
                        <div class="user-info">
                            <div class="user-role">Logged in as</div>
                            <div class="user-name">John Doe</div>
                        </div>
                    </button>
                    <div class="profile-actions">
                        <button class="profile-action-btn" onclick="showProfileSettings()" title="Settings">
                            <i class="fas fa-cog"></i>
                        </button>
                        <button class="logout-btn" onclick="logout()" title="Logout">
                            <i class="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    `;
}

// Show workspace modal
function showWorkspaceModal() {
    // Close unified modal if open
    const unifiedModal = document.getElementById('unifiedModal');
    if (unifiedModal && unifiedModal.classList.contains('show')) {
        hideUnifiedModal();
    }
    
    // Close any existing popup overlays
    const existing = document.querySelectorAll('.workspace-modal-overlay, .custom-prompt-overlay');
    existing.forEach(m => m.remove());
    
    const overlay = document.createElement('div');
    overlay.className = 'workspace-modal-overlay';
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(8px); z-index: 10001; display: flex; align-items: center; justify-content: center; font-family: "Inter", sans-serif;';
    
    const modal = document.createElement('div');
    modal.style.cssText = 'background: #0f172a; border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 16px; padding: 24px; max-width: 500px; width: 90%; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);';
    
    modal.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <div style="font-size: 18px; font-weight: 700; color: #f1f5f9;">
                <i class="fas fa-briefcase"></i> Switch Workspace
            </div>
            <button onclick="document.querySelector('.workspace-modal-overlay').remove();" style="background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 20px; padding: 0; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 6px; transition: all 0.2s;" onmouseover="this.style.background='rgba(100, 116, 139, 0.2)'" onmouseout="this.style.background='none'">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
            <div class="workspace-option active" onclick="selectWorkspace('my-docs')" style="display: flex; align-items: center; gap: 12px; padding: 14px; background: rgba(168, 85, 247, 0.15); border: 2px solid #a855f7; border-radius: 10px; cursor: pointer; transition: all 0.2s;">
                <div style="width: 40px; height: 40px; background: linear-gradient(to bottom right, #d97706, #2563eb); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">💼</div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; font-size: 14px; color: #f1f5f9;">My Documents</div>
                    <div style="font-size: 12px; color: #94a3b8;">3 members • Personal</div>
                </div>
                <i class="fas fa-check-circle" style="color: #a855f7; font-size: 20px;"></i>
            </div>
            
            <div class="workspace-option" onclick="selectWorkspace('team')" style="display: flex; align-items: center; gap: 12px; padding: 14px; background: rgba(30, 41, 59, 0.3); border: 2px solid rgba(100, 116, 139, 0.5); border-radius: 10px; cursor: pointer; transition: all 0.2s;">
                <div style="width: 40px; height: 40px; background: linear-gradient(to bottom right, #22c55e, #3b82f6); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">👥</div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; font-size: 14px; color: #f1f5f9;">Team Workspace</div>
                    <div style="font-size: 12px; color: #94a3b8;">12 members • Shared</div>
                </div>
            </div>
            
            <div class="workspace-option" onclick="selectWorkspace('projects')" style="display: flex; align-items: center; gap: 12px; padding: 14px; background: rgba(30, 41, 59, 0.3); border: 2px solid rgba(100, 116, 139, 0.5); border-radius: 10px; cursor: pointer; transition: all 0.2s;">
                <div style="width: 40px; height: 40px; background: linear-gradient(to bottom right, #f59e0b, #ef4444); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">📁</div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; font-size: 14px; color: #f1f5f9;">Projects</div>
                    <div style="font-size: 12px; color: #94a3b8;">5 members • Collaboration</div>
                </div>
            </div>
        </div>
        
        <div style="border-top: 1px solid rgba(100, 116, 139, 0.3); padding-top: 16px; margin-top: 16px;">
            <button onclick="createNewWorkspace()" style="width: 100%; padding: 10px; background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s;">
                <i class="fas fa-plus"></i> Create New Workspace
            </button>
        </div>
        
        <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
            <button onclick="applyWorkspaceAndClose()" style="padding: 8px 16px; background: linear-gradient(to right, #a855f7, #3b82f6); border: none; color: white; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 500;">
                <i class="fas fa-check"></i> Done
            </button>
        </div>
    `;
    
    // Add hover effects
    const style = document.createElement('style');
    style.textContent = `
        .workspace-option:hover {
            background: rgba(30, 41, 59, 0.5) !important;
            border-color: rgba(168, 85, 247, 0.5) !important;
        }
        .workspace-option.active:hover {
            background: rgba(168, 85, 247, 0.25) !important;
        }
    `;
    document.head.appendChild(style);
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    overlay.onclick = (e) => {
        if (e.target === overlay) overlay.remove();
    };
}

function selectWorkspace(workspaceId) {
    const workspaceData = {
        'my-docs': { name: 'My Documents', icon: '💼', members: '3 members' },
        'team': { name: 'Team Workspace', icon: '👥', members: '12 members' },
        'projects': { name: 'Projects', icon: '📁', members: '5 members' }
    };
    
    const workspace = workspaceData[workspaceId];
    if (workspace) {
        // Remove active class from all options
        const options = document.querySelectorAll('.workspace-option');
        options.forEach(opt => {
            opt.classList.remove('active');
            opt.style.background = 'rgba(30, 41, 59, 0.3)';
            opt.style.borderColor = 'rgba(100, 116, 139, 0.5)';
            const checkIcon = opt.querySelector('.fa-check-circle');
            if (checkIcon) checkIcon.remove();
        });
        
        // Add active class to selected option
        const selectedOption = document.querySelector(`.workspace-option[onclick*="${workspaceId}"]`);
        if (selectedOption) {
            selectedOption.classList.add('active');
            selectedOption.style.background = 'rgba(168, 85, 247, 0.15)';
            selectedOption.style.borderColor = '#a855f7';
            
            // Add check icon if not exists
            if (!selectedOption.querySelector('.fa-check-circle')) {
                selectedOption.innerHTML += '<i class="fas fa-check-circle" style="color: #a855f7; font-size: 20px;"></i>';
            }
        }
        
        // Store selected workspace temporarily (will apply when closing modal)
        window.selectedWorkspace = workspace;
    }
}

function applyWorkspaceAndClose() {
    if (window.selectedWorkspace) {
        const workspace = window.selectedWorkspace;
        document.querySelector('.workspace-name').textContent = workspace.name;
        document.querySelector('.workspace-members').textContent = workspace.members;
        document.querySelector('.workspace-icon').textContent = workspace.icon;
        
        showToast(`Switched to ${workspace.name}`, 'success');
        window.selectedWorkspace = null;
    }
    
    document.querySelector('.workspace-modal-overlay').remove();
}

function createNewWorkspace() {
    document.querySelector('.workspace-modal-overlay').remove();
    
    showPrompt('Enter workspace name:', '', (name) => {
        if (name) {
            showToast(`Workspace "${name}" created!`, 'success');
        }
    });
}
// Search chats
function searchChats(query) {
    const chatItems = document.querySelectorAll('#chatHistory .chat-item');
    const lowerQuery = query.toLowerCase();
    
    chatItems.forEach(item => {
        const title = item.querySelector('[style*="font-weight: 600"]').textContent.toLowerCase();
        if (title.includes(lowerQuery)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Filter chats
let currentFilter = 'all';
function filterChats(filter) {
    currentFilter = filter;
    const chatItems = document.querySelectorAll('#chatHistory .chat-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    
    // Apply filter
    chatItems.forEach(item => {
        const time = item.getAttribute('data-time');
        const starred = item.getAttribute('data-starred') === 'true';
        let show = false;
        
        if (filter === 'all') {
            show = true;
        } else if (filter === 'today') {
            show = time && time.includes('h'); // Show items with hours
        } else if (filter === 'starred') {
            show = starred;
        }
        
        item.style.display = show ? 'flex' : 'none';
    });
}

// Toggle star
function toggleStar(btn) {
    const chatItem = btn.closest('.chat-item');
    const icon = btn.querySelector('i');
    const isStarred = icon.classList.contains('fas');
    
    if (isStarred) {
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.classList.remove('starred');
        chatItem.setAttribute('data-starred', 'false');
        showToast('Removed from starred', 'info', 2000);
    } else {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.classList.add('starred');
        chatItem.setAttribute('data-starred', 'true');
        showToast('Added to starred', 'success', 2000);
    }
}

// Rename chat
function renameChat(chatIndex) {
    showPrompt('Enter new chat name:', 'My Chat', (newName) => {
        if (newName) {
            const chatItems = document.querySelectorAll('#chatHistory .chat-item');
            if (chatItems[chatIndex]) {
                const titleEl = chatItems[chatIndex].querySelector('[style*="font-weight: 600"]');
                titleEl.textContent = newName;
                showToast('Chat renamed', 'success', 2000);
            }
        }
    });
}

// Delete chat
function deleteChat(chatIndex) {
    showConfirm('Delete this chat permanently?', () => {
        const chatItems = document.querySelectorAll('#chatHistory .chat-item');
        if (chatItems[chatIndex]) {
            chatItems[chatIndex].remove();
            showToast('Chat deleted', 'success', 2000);
        }
    });
}

// Theme toggle
let isDarkTheme = true;
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    const icon = document.querySelector('.profile-action-btn i.fa-moon, .profile-action-btn i.fa-sun');
    
    if (isDarkTheme) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        showToast('Switched to Dark Theme', 'info', 2000);
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        showToast('Switched to Light Theme', 'info', 2000);
    }
    
    // Apply theme changes to body
    document.body.classList.toggle('light-theme', !isDarkTheme);
}

// Show keyboard shortcuts
function showProfileSettings() {
    // Close unified modal if open
    const unifiedModal = document.getElementById('unifiedModal');
    if (unifiedModal && unifiedModal.classList.contains('show')) {
        hideUnifiedModal();
    }
    
    // Close any existing popup overlays
    const existing = document.querySelectorAll('.profile-settings-overlay, .workspace-modal-overlay, .custom-prompt-overlay, .keyboard-shortcuts-overlay, .help-modal-overlay, .notifications-overlay');
    existing.forEach(m => m.remove());
    
    const overlay = document.createElement('div');
    overlay.className = 'profile-settings-overlay';
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(8px); z-index: 10001; display: flex; align-items: center; justify-content: center;';
    
    const modal = document.createElement('div');
    modal.style.cssText = 'background: #0f172a; border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 16px; padding: 0; max-width: 700px; width: 90%; max-height: 85vh; overflow: hidden; display: flex; flex-direction: column;';
    
    modal.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 24px; border-bottom: 1px solid rgba(100, 116, 139, 0.3);">
            <h2 style="font-size: 20px; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-cog" style="color: #a78bfa;"></i>
                Profile & Settings
            </h2>
            <button onclick="this.closest('.profile-settings-overlay').remove()" style="width: 32px; height: 32px; background: rgba(100, 116, 139, 0.2); border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 8px; color: #94a3b8; cursor: pointer; transition: all 0.2s;">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div style="display: flex; gap: 16px; padding: 16px 24px; border-bottom: 1px solid rgba(100, 116, 139, 0.2);">
            <button class="settings-tab active" data-tab="general" onclick="switchSettingsTab('general')" style="padding: 8px 16px; background: linear-gradient(to right, #a855f7, #3b82f6); border: none; border-radius: 8px; color: white; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                <i class="fas fa-user-cog"></i> General
            </button>
            <button class="settings-tab" data-tab="shortcuts" onclick="switchSettingsTab('shortcuts')" style="padding: 8px 16px; background: rgba(100, 116, 139, 0.2); border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 8px; color: #cbd5e1; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                <i class="fas fa-keyboard"></i> Shortcuts
            </button>
            <button class="settings-tab" data-tab="help" onclick="switchSettingsTab('help')" style="padding: 8px 16px; background: rgba(100, 116, 139, 0.2); border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 8px; color: #cbd5e1; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                <i class="fas fa-question-circle"></i> Help
            </button>
            <button class="settings-tab" data-tab="about" onclick="switchSettingsTab('about')" style="padding: 8px 16px; background: rgba(100, 116, 139, 0.2); border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 8px; color: #cbd5e1; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                <i class="fas fa-info-circle"></i> About
            </button>
        </div>
        
        <div style="flex: 1; overflow-y: auto; padding: 24px;">
            <!-- General Tab -->
            <div class="settings-pane" id="general-pane" style="display: block;">
                <div style="display: grid; gap: 20px;">
                    <!-- Profile -->
                    <div style="background: rgba(30, 41, 59, 0.3); border: 1px solid rgba(100, 116, 139, 0.3); border-radius: 12px; padding: 16px;">
                        <h3 style="color: #f1f5f9; font-size: 15px; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                            <i class="fas fa-user" style="color: #60a5fa;"></i>
                            Profile
                        </h3>
                        <div style="display: flex; align-items: center; gap: 16px;">
                            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #a855f7, #3b82f6); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px;">👤</div>
                            <div>
                                <div style="font-size: 16px; font-weight: 600; color: #f1f5f9;">John Doe</div>
                                <div style="font-size: 13px; color: #94a3b8;">john.doe@example.com</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Dark Mode -->
                    <div style="background: rgba(30, 41, 59, 0.3); border: 1px solid rgba(100, 116, 139, 0.3); border-radius: 12px; padding: 16px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h3 style="color: #f1f5f9; font-size: 15px; font-weight: 600; margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
                                    <i class="fas fa-moon" style="color: #fbbf24;"></i>
                                    Dark Mode
                                </h3>
                                <p style="font-size: 12px; color: #94a3b8;">Toggle dark/light theme</p>
                            </div>
                            <label style="position: relative; display: inline-block; width: 50px; height: 24px;">
                                <input type="checkbox" checked onclick="toggleTheme()" style="opacity: 0; width: 0; height: 0;">
                                <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to right, #a855f7, #3b82f6); border-radius: 24px; transition: 0.3s;"></span>
                                <span style="position: absolute; content: ''; height: 18px; width: 18px; left: 3px; bottom: 3px; background: white; border-radius: 50%; transition: 0.3s; transform: translateX(26px);"></span>
                            </label>
                        </div>
                    </div>
                    
                    <!-- Language -->
                    <div style="background: rgba(30, 41, 59, 0.3); border: 1px solid rgba(100, 116, 139, 0.3); border-radius: 12px; padding: 16px;">
                        <h3 style="color: #f1f5f9; font-size: 15px; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                            <i class="fas fa-language" style="color: #34d399;"></i>
                            Language
                        </h3>
                        <select style="width: 100%; padding: 10px; background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 8px; color: #f1f5f9; font-size: 14px; cursor: pointer;">
                            <option value="en">English</option>
                            <option value="id">Bahasa Indonesia</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- Shortcuts Tab -->
            <div class="settings-pane" id="shortcuts-pane" style="display: none;">
                <div style="display: grid; gap: 12px;">
                    ${createShortcutRow('Ctrl/Cmd + K', 'Open Presets & Prompts')}
                    ${createShortcutRow('Ctrl/Cmd + N', 'New Chat')}
                    ${createShortcutRow('Ctrl/Cmd + S', 'Save Chat')}
                    ${createShortcutRow('Ctrl/Cmd + E', 'Export Chat')}
                    ${createShortcutRow('Ctrl/Cmd + /', 'Toggle Sidebar')}
                    ${createShortcutRow('Ctrl/Cmd + F', 'Search Chats')}
                    ${createShortcutRow('Ctrl/Cmd + M', 'Change Model')}
                    ${createShortcutRow('Ctrl/Cmd + ,', 'Open Settings')}
                    ${createShortcutRow('Esc', 'Close Modal/Dialog')}
                    ${createShortcutRow('↑ / ↓', 'Navigate Chat History')}
                </div>
            </div>
            
            <!-- Help Tab -->
            <div class="settings-pane" id="help-pane" style="display: none;">
                <div style="display: grid; gap: 16px;">
                    <div style="background: rgba(30, 41, 59, 0.3); border: 1px solid rgba(100, 116, 139, 0.3); border-radius: 12px; padding: 20px;">
                        <h3 style="color: #f1f5f9; font-size: 16px; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                            <i class="fas fa-rocket" style="color: #60a5fa;"></i>
                            Getting Started
                        </h3>
                        <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6; margin-bottom: 12px;">
                            Welcome to Document Analysis Chat! Upload your documents, select AI presets, and start analyzing with powerful AI models.
                        </p>
                        <button onclick="window.open('https://docs.example.com', '_blank')" style="padding: 8px 16px; background: linear-gradient(to right, #a855f7, #3b82f6); border: none; border-radius: 8px; color: white; font-size: 13px; font-weight: 600; cursor: pointer;">
                            View Documentation →
                        </button>
                    </div>
                    
                    ${getHelpContent()}
                </div>
            </div>
            
            <!-- About Tab -->
            <div class="settings-pane" id="about-pane" style="display: none;">
                <div style="text-align: center; padding: 40px 20px;">
                    <div style="font-size: 48px; margin-bottom: 16px;">📄</div>
                    <h3 style="color: #f1f5f9; font-size: 24px; font-weight: 700; margin-bottom: 8px;">Document Analysis Chat</h3>
                    <p style="color: #94a3b8; font-size: 14px; margin-bottom: 24px;">Version 1.0.0</p>
                    <p style="color: #cbd5e1; font-size: 13px; line-height: 1.6; max-width: 400px; margin: 0 auto;">
                        A powerful AI-powered document analysis platform with advanced preset management and multi-model support.
                    </p>
                    <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(100, 116, 139, 0.3);">
                        <p style="color: #64748b; font-size: 12px;">Built with ❤️ using Claude AI</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    overlay.onclick = (e) => {
        if (e.target === overlay) overlay.remove();
    };
}

function switchSettingsTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.settings-tab').forEach(btn => {
        if (btn.dataset.tab === tabName) {
            btn.style.background = 'linear-gradient(to right, #a855f7, #3b82f6)';
            btn.style.color = 'white';
            btn.style.border = 'none';
        } else {
            btn.style.background = 'rgba(100, 116, 139, 0.2)';
            btn.style.color = '#cbd5e1';
            btn.style.border = '1px solid rgba(100, 116, 139, 0.5)';
        }
    });
    
    // Update panes
    document.querySelectorAll('.settings-pane').forEach(pane => {
        pane.style.display = 'none';
    });
    document.getElementById(`${tabName}-pane`).style.display = 'block';
}

function toggleTheme() {
    showToast('Theme toggled', 'success', 2000);
}

function createShortcutRow(keys, description) {
    return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: rgba(30, 41, 59, 0.3); border-radius: 8px;">
            <span style="color: #cbd5e1; font-size: 14px;">${description}</span>
            <kbd style="background: rgba(100, 116, 139, 0.3); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-family: monospace; color: #a78bfa; border: 1px solid rgba(168, 85, 247, 0.3);">${keys}</kbd>
        </div>
    `;
}

function getHelpContent() {
    const helps = [
        { icon: 'fa-magic', title: 'Using Presets', desc: 'Combine Role + Task + Behavior for perfect prompts' },
        { icon: 'fa-upload', title: 'Upload Files', desc: 'Drag & drop or click to upload documents' },
        { icon: 'fa-robot', title: 'Select Models', desc: 'Choose from multiple AI models for different tasks' },
        { icon: 'fa-download', title: 'Export Chats', desc: 'Save conversations as JSON files' }
    ];
    
    return helps.map(h => `
        <div style="display: flex; gap: 12px; padding: 12px; background: rgba(30, 41, 59, 0.3); border-radius: 8px;">
            <i class="fas ${h.icon}" style="color: #8b5cf6; font-size: 18px; width: 24px; text-align: center;"></i>
            <div>
                <div style="font-weight: 600; color: #f1f5f9; margin-bottom: 4px; font-size: 13px;">${h.title}</div>
                <div style="font-size: 12px; color: #94a3b8;">${h.desc}</div>
            </div>
        </div>
    `).join('');
}

// REMOVED: showKeyboardShortcuts, showHelpModal, showNotifications, clearNotifications


// Show settings modal
function showSettingsModal() {
    showToast('Settings panel coming soon!', 'info', 2000);
}

// File functions
function searchFiles(query) {
    const fileItems = document.querySelectorAll('#fileHistory .file-item');
    const lowerQuery = query.toLowerCase();
    
    fileItems.forEach(item => {
        const title = item.querySelector('[style*="font-weight: 600"]').textContent.toLowerCase();
        if (title.includes(lowerQuery)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function previewFile(index) {
    showToast('File preview coming soon!', 'info', 2000);
}

function downloadFile(index) {
    showToast('Downloading file...', 'success', 2000);
}

function deleteFile(index) {
    showConfirm('Delete this file permanently?', () => {
        const fileItems = document.querySelectorAll('#fileHistory .file-item');
        if (fileItems[index]) {
            fileItems[index].remove();
            showToast('File deleted', 'success', 2000);
        }
    });
}

function uploadNewFile() {
    showToast('File upload dialog coming soon!', 'info', 2000);
}

function logout() {
    showConfirm('Are you sure you want to logout?', () => {
        showToast('Logging out...', 'info', 2000);
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    });
}

// Show Profile Settings Modal (combines keyboard shortcuts, help, dark mode)
function showProfileSettings() {
    // Close unified modal if open
    const unifiedModal = document.getElementById('unifiedModal');
    if (unifiedModal?.classList.contains('show')) {
        hideUnifiedModal();
    }
    
    // Close other popups
    const existing = document.querySelectorAll('.workspace-modal-overlay, .custom-prompt-overlay');
    existing.forEach(m => m.remove());
    
    const overlay = document.createElement('div');
    overlay.className = 'profile-settings-overlay';
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(8px); z-index: 10001; display: flex; align-items: center; justify-content: center;';
    
    const modal = document.createElement('div');
    modal.style.cssText = 'background: #0f172a; border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 16px; padding: 0; max-width: 700px; width: 90%; max-height: 85vh; overflow: hidden; display: flex; flex-direction: column;';
    
    modal.innerHTML = `
        <div style="padding: 24px; border-bottom: 1px solid rgba(100, 116, 139, 0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 20px; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-cog"></i> Settings
                </h2>
                <button onclick="this.closest('.profile-settings-overlay').remove()" style="width: 32px; height: 32px; border-radius: 8px; border: 1px solid rgba(100, 116, 139, 0.5); background: rgba(30, 41, 59, 0.5); color: #94a3b8; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        
        <div style="flex: 1; overflow-y: auto; padding: 24px;">
            <!-- Dark Mode -->
            <div style="margin-bottom: 32px;">
                <h3 style="font-size: 16px; font-weight: 600; color: #f1f5f9; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-moon"></i> Appearance
                </h3>
                <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(100, 116, 139, 0.3); border-radius: 12px; padding: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-weight: 600; color: #f1f5f9; margin-bottom: 4px;">Dark Mode</div>
                            <div style="font-size: 13px; color: #94a3b8;">Toggle between light and dark theme</div>
                        </div>
                        <button onclick="toggleTheme()" style="padding: 8px 16px; background: linear-gradient(135deg, #8b5cf6, #6366f1); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                            <i class="fas fa-adjust"></i> Toggle
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Keyboard Shortcuts -->
            <div style="margin-bottom: 32px;">
                <h3 style="font-size: 16px; font-weight: 600; color: #f1f5f9; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-keyboard"></i> Keyboard Shortcuts
                </h3>
                <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(100, 116, 139, 0.3); border-radius: 12px; padding: 16px;">
                    ${generateShortcutsList()}
                </div>
            </div>
            
            <!-- Documentation -->
            <div>
                <h3 style="font-size: 16px; font-weight: 600; color: #f1f5f9; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-book"></i> Help & Documentation
                </h3>
                <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(100, 116, 139, 0.3); border-radius: 12px; padding: 16px;">
                    ${generateHelpContent()}
                </div>
            </div>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
}

function generateShortcutsList() {
    const shortcuts = [
        { key: 'Ctrl + Enter', desc: 'Send message' },
        { key: 'Ctrl + N', desc: 'New chat' },
        { key: 'Ctrl + K', desc: 'Focus search' },
        { key: 'Esc', desc: 'Close modal' }
    ];
    
    return shortcuts.map(s => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(100, 116, 139, 0.2); last-child: border-bottom: none;">
            <span style="color: #cbd5e1; font-size: 13px;">${s.desc}</span>
            <kbd style="padding: 4px 8px; background: rgba(100, 116, 139, 0.3); border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 6px; font-size: 12px; color: #f1f5f9; font-family: monospace;">${s.key}</kbd>
        </div>
    `).join('');
}

function generateHelpContent() {
    const help = [
        { icon: 'fa-magic', title: 'Presets', desc: 'Use AI presets for different tasks' },
        { icon: 'fa-book', title: 'Prompt Library', desc: 'Access pre-built prompts' },
        { icon: 'fa-file-upload', title: 'File Upload', desc: 'Attach documents for analysis' },
        { icon: 'fa-download', title: 'Export', desc: 'Export conversations as JSON' }
    ];
    
    return help.map(h => `
        <div style="display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid rgba(100, 116, 139, 0.2);">
            <i class="fas ${h.icon}" style="color: #8b5cf6; font-size: 18px; width: 24px; text-align: center;"></i>
            <div>
                <div style="font-weight: 600; color: #f1f5f9; margin-bottom: 4px; font-size: 13px;">${h.title}</div>
                <div style="font-size: 12px; color: #94a3b8;">${h.desc}</div>
            </div>
        </div>
    `).join('');
}

// Export chat history with download
function exportChatHistory(index) {
    // Show export dialog
    const overlay = document.createElement('div');
    overlay.className = 'export-dialog-overlay';
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(8px); z-index: 10002; display: flex; align-items: center; justify-content: center;';
    
    const dialog = document.createElement('div');
    dialog.style.cssText = 'background: #0f172a; border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 16px; padding: 24px; max-width: 400px; width: 90%; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);';
    
    dialog.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #a855f7, #3b82f6); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                💾
            </div>
            <div>
                <h3 style="font-size: 18px; font-weight: 700; color: #f1f5f9; margin-bottom: 4px;">Export Chat</h3>
                <p style="font-size: 13px; color: #94a3b8;">Download conversation as JSON</p>
            </div>
        </div>
        
        <div style="background: rgba(30, 41, 59, 0.3); border: 1px solid rgba(100, 116, 139, 0.3); border-radius: 8px; padding: 12px; margin-bottom: 20px;">
            <div style="font-size: 12px; color: #cbd5e1; margin-bottom: 8px;">
                <i class="fas fa-info-circle" style="color: #60a5fa;"></i> Export includes:
            </div>
            <ul style="font-size: 11px; color: #94a3b8; margin: 0; padding-left: 20px;">
                <li>All messages</li>
                <li>Timestamps</li>
                <li>Model & preset info</li>
            </ul>
        </div>
        
        <div style="display: flex; gap: 12px;">
            <button onclick="this.closest('.export-dialog-overlay').remove()" style="flex: 1; padding: 10px; background: rgba(100, 116, 139, 0.2); border: 1px solid rgba(100, 116, 139, 0.5); border-radius: 8px; color: #cbd5e1; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                Cancel
            </button>
            <button onclick="confirmExport(${index}); this.closest('.export-dialog-overlay').remove();" style="flex: 1; padding: 10px; background: linear-gradient(to right, #a855f7, #3b82f6); border: none; border-radius: 8px; color: white; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                <i class="fas fa-download"></i> Export
            </button>
        </div>
    `;
    
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    
    overlay.onclick = (e) => {
        if (e.target === overlay) overlay.remove();
    };
}

function confirmExport(index) {
    // Get messages from global scope or create dummy data
    const chatMessages = typeof messages !== 'undefined' ? messages : [
        { role: 'user', content: 'Sample user message' },
        { role: 'assistant', content: 'Sample AI response' }
    ];
    
    const chatData = {
        id: index,
        title: `Chat ${index + 1}`,
        timestamp: new Date().toISOString(),
        messages: chatMessages,
        metadata: {
            model: typeof selectedModel !== 'undefined' ? selectedModel : 'claude-sonnet',
            preset: {
                role: typeof selectedRole !== 'undefined' ? selectedRole?.name : 'None',
                task: typeof selectedTask !== 'undefined' ? selectedTask?.name : 'None',
                behavior: typeof selectedBehavior !== 'undefined' ? selectedBehavior?.name : 'None'
            }
        }
    };
    
    const dataStr = JSON.stringify(chatData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat_export_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('💾 Chat exported successfully!', 'success', 3000);
}

// Export single message with download
function exportSingleMessage(index) {
    const chatMessages = typeof messages !== 'undefined' ? messages : [];
    
    if (!chatMessages || !chatMessages[index]) {
        showToast('❌ Message not found', 'error', 2000);
        return;
    }
    
    const messageData = {
        index: index,
        timestamp: new Date().toISOString(),
        message: chatMessages[index]
    };
    
    const dataStr = JSON.stringify(messageData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `message_export_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('💾 Message exported!', 'success', 2000);
}