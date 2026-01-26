function renderModals() {
    return `${renderUnifiedModal()}${renderModelModal()}${renderProfileModal()}`;
}

function renderUnifiedModal() {
    return `
        <div id="unifiedModal" class="modal-overlay">
            <div class="modal">
                <div class="modal-header">
                    <h2 class="modal-title">📚 Preset Collections</h2>
                    <button class="modal-close-btn" onclick="hideUnifiedModal()"><i class="fas fa-times"></i></button>
                </div>
                
                <div class="unified-modal-content">
                    <!-- 3 COLUMN LAYOUT -->
                    <div class="three-column-layout">
                        
                        <!-- LEFT: SAVED PRESETS -->
                        <div class="saved-presets-column">
                            <div class="column-header">
                                <span><i class="fas fa-bookmark"></i> SAVED PRESETS</span>
                                <div class="column-header-right">
                                    <button class="column-info-btn" onclick="showColumnInfo('saved')">...</button>
                                    <button class="add-new-btn-header" onclick="showAddNewPresetDialog()" title="Add New Preset">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="column-content" id="savedPresetsColumn">
                                <!-- Saved presets will be rendered here -->
                            </div>
                            <div style="display: flex; gap: 8px; margin: 8px;">
                                <button class="add-new-btn" onclick="updateCurrentPreset()" 
                                        style="flex: 1; background: rgba(168, 85, 247, 0.15); border-color: rgba(168, 85, 247, 0.3); color: #a78bfa;">
                                    <i class="fas fa-save"></i> Save
                                </button>
                                <button class="add-new-btn" onclick="saveCurrentAsPreset()" 
                                        style="flex: 1;">
                                    <i class="fas fa-plus-circle"></i> Save As New
                                </button>
                            </div>
                        </div>
                        
                        <!-- MIDDLE: AGENT BUILDER -->
                        <div class="agent-builder-column">
                            
                            <!-- ROW 1: Identity, Expertise, Personality, Constraints -->
                            <div class="builder-row">
                                <div class="column-panel compact">
                                    <div class="column-header">
                                        <span><i class="fas fa-user-tie"></i> Identity</span>
                                        <div class="column-header-right">
                                            <button class="column-info-btn" onclick="showColumnInfo('identity')"><i class="fas fa-question-circle"></i></button>
                                            <button class="add-new-btn-header" onclick="showAddPresetDialog('Identity')" title="Add Identity">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="column-content" id="identityColumn"></div>
                                </div>
                                
                                <div class="column-panel compact">
                                    <div class="column-header">
                                        <span><i class="fas fa-brain"></i> Expertise</span>
                                        <div class="column-header-right">
                                            <button class="column-info-btn" onclick="showColumnInfo('expertise')"><i class="fas fa-question-circle"></i></button>
                                            <button class="add-new-btn-header" onclick="showAddPresetDialog('Expertise')" title="Add Expertise">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="column-content" id="expertiseColumn"></div>
                                </div>
                                
                                <div class="column-panel compact">
                                    <div class="column-header">
                                        <span><i class="fas fa-comments"></i> Personality</span>
                                        <div class="column-header-right">
                                            <button class="column-info-btn" onclick="showColumnInfo('personality')"><i class="fas fa-question-circle"></i></button>
                                            <button class="add-new-btn-header" onclick="showAddPresetDialog('Personality')" title="Add Personality">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="column-content" id="personalityColumn"></div>
                                </div>
                                
                                <div class="column-panel compact">
                                    <div class="column-header">
                                        <span><i class="fas fa-ban"></i> Constraints</span>
                                        <div class="column-header-right">
                                            <button class="column-info-btn" onclick="showColumnInfo('constraints')"><i class="fas fa-question-circle"></i></button>
                                            <button class="add-new-btn-header" onclick="showAddPresetDialog('Constraints')" title="Add Constraint">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="column-content" id="constraintsColumn"></div>
                                </div>
                            </div>
                            
                            <!-- ROW 2: Output, Approach, Context, Custom -->
                            <div class="builder-row">
                                <div class="column-panel compact">
                                    <div class="column-header">
                                        <span><i class="fas fa-file-alt"></i> Output</span>
                                        <div class="column-header-right">
                                            <button class="column-info-btn" onclick="showColumnInfo('output')"><i class="fas fa-question-circle"></i></button>
                                            <button class="add-new-btn-header" onclick="showAddPresetDialog('Output Format')" title="Add Output Format">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="column-content" id="outputFormatColumn"></div>
                                </div>
                                
                                <div class="column-panel compact">
                                    <div class="column-header">
                                        <span><i class="fas fa-tasks"></i> Approach</span>
                                        <div class="column-header-right">
                                            <button class="column-info-btn" onclick="showColumnInfo('task')"><i class="fas fa-question-circle"></i></button>
                                            <button class="add-new-btn-header" onclick="showAddPresetDialog('Task Framing')" title="Add Task Approach">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="column-content" id="taskFramingColumn"></div>
                                </div>
                                
                                <div class="column-panel compact">
                                    <div class="column-header">
                                        <span><i class="fas fa-link"></i> Context</span>
                                        <div class="column-header-right">
                                            <button class="column-info-btn" onclick="showColumnInfo('context')"><i class="fas fa-question-circle"></i></button>
                                            <button class="add-new-btn-header" onclick="showAddPresetDialog('Context Hooks')" title="Add Context Hook">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="column-content" id="contextHooksColumn"></div>
                                </div>
                                
                                <div class="column-panel compact">
                                    <div class="column-header">
                                        <span><i class="fas fa-edit"></i> Custom</span>
                                        <div class="column-header-right">
                                            <button class="column-info-btn" onclick="showColumnInfo('custom')"><i class="fas fa-question-circle"></i></button>
                                            <button class="add-new-btn-header" onclick="showAddCustomPromptDialog()" title="Add Custom Prompt">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="column-content" id="customPromptColumn"></div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <!-- RIGHT: PREVIEW PANEL -->
                        <div class="preview-panel-right">
                            <div class="preview-header">
                                <h3><i class="fas fa-eye"></i> Combined Prompt</h3>
                                <button onclick="copyPromptToClipboard()" class="copy-btn"><i class="fas fa-copy"></i> Copy</button>
                            </div>
                            <div id="presetPreview" class="preview-content"></div>
                        </div>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="modal-cancel-btn" onclick="hideUnifiedModal()">Cancel</button>
                    <button class="modal-done-btn" onclick="applyFromUnifiedModal()"><i class="fas fa-check"></i> Apply Agent</button>
                </div>
            </div>
        </div>
    `;
}

function showAddNewPresetDialog() {
    // Dialog untuk membuat preset baru dari scratch
    const overlay = document.createElement('div');
    overlay.className = 'custom-prompt-overlay';
    overlay.style.cssText = '...';
    
    overlay.innerHTML = `
        <div style="...">
            <h3>Create New Preset</h3>
            <input id="newPresetName" placeholder="Preset Name">
            <input id="newPresetDesc" placeholder="Description">
            <input id="newPresetIcon" placeholder="Icon (emoji)">
            <div>
                <button onclick="cancelAddNewPreset()">Cancel</button>
                <button onclick="confirmAddNewPreset()">Create</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

function updateCurrentPreset() {
    // Cek apakah ada preset yang sedang di-load
    const currentLoadedPresetId = localStorage.getItem('currentLoadedPresetId');
    
    if (!currentLoadedPresetId) {
        showToast('No preset loaded. Use "Save As New" instead.', 'warning');
        return;
    }
    
    // Update preset yang sudah ada
    const savedPresets = JSON.parse(localStorage.getItem('savedCompletePresets') || '[]');
    const presetIndex = savedPresets.findIndex(p => p.id === currentLoadedPresetId);
    
    if (presetIndex === -1) {
        showToast('Preset not found', 'error');
        return;
    }
    
    // Update dengan konfigurasi saat ini
    savedPresets[presetIndex] = {
        ...savedPresets[presetIndex],
        identity: selectedIdentity?.id || null,
        expertise: selectedExpertise?.id || null,
        personality: selectedPersonality?.id || null,
        constraints: selectedConstraints?.id || null,
        outputFormat: selectedOutputFormat?.id || null,
        taskFraming: selectedTaskFraming?.id || null,
        contextHooks: selectedContextHooks?.id || null,
        customPrompts: window.selectedCustomPrompts || []
    };
    
    localStorage.setItem('savedCompletePresets', JSON.stringify(savedPresets));
    
    renderSavedPresets();
    showToast(`✅ Updated: ${savedPresets[presetIndex].name}`, 'success');
}

function showColumnInfo(type) {
    const info = {
        saved: { title: '📚 Saved Presets', desc: 'Your previously saved agent configurations.', ex: ['Quick access', 'Click to load', 'Edit or delete'] },
        identity: { title: '🎭 Identity', desc: 'WHO is the AI? Define role and persona.', ex: ['Data Analyst', 'Teacher', 'Consultant'] },
        expertise: { title: '🧠 Expertise', desc: 'WHAT does it know? Domain knowledge.', ex: ['Statistics', 'Finance', 'Marketing'] },
        personality: { title: '💬 Personality', desc: 'HOW does it talk? Tone and style.', ex: ['Professional', 'Friendly', 'Direct'] },
        constraints: { title: '🚫 Constraints', desc: 'What it CANNOT do. Rules.', ex: ['No speculation', 'Cite sources', 'Brief'] },
        output: { title: '📄 Output', desc: 'HOW to structure responses.', ex: ['Exec Summary', 'Bullets', 'Steps'] },
        task: { title: '🎯 Approach', desc: 'HOW to solve problems.', ex: ['Problem-Solution', 'Analysis', 'Teaching'] },
        context: { title: '🔗 Context', desc: 'WHAT info to use.', ex: ['Documents', 'Conversation', 'Data'] },
        custom: { title: '📝 Custom', desc: 'Your own custom prompts. Add anything!', ex: ['Personal reminders', 'Project notes', 'Special instructions'] }
    };
    
    const i = info[type] || { title: 'Info', desc: 'No info available', ex: [] };
    
    showToast(`${i.title}\n\n${i.desc}\n\nExamples:\n• ${i.ex.join('\n• ')}`, 'info', 5000);
}

function showUnifiedModal(target) {
    console.log('📂 Opening Unified Modal...');
    console.log('Target tab:', target);
    
    loadAllPresets();
    renderAllColumns();
    updatePresetPreview();
    
    document.getElementById('unifiedModal').classList.add('show');
}

function hideUnifiedModal() {
    document.getElementById('unifiedModal').classList.remove('show');
}

function applyFromUnifiedModal() {
    console.log('✅ Applying agent configuration...');
    
    updateCurrentPreset();
    
    hideUnifiedModal();
    showToast('Agent configuration applied!', 'success');
}

function renderAllColumns() {
    console.log('🎨 Rendering all columns...');
    
    renderColumnItems('Identity', 'identityColumn', selectedIdentity);
    renderColumnItems('Expertise', 'expertiseColumn', selectedExpertise);
    renderColumnItems('Personality', 'personalityColumn', selectedPersonality);
    renderColumnItems('Constraints', 'constraintsColumn', selectedConstraints);
    renderColumnItems('Output Format', 'outputFormatColumn', selectedOutputFormat);
    renderColumnItems('Task Framing', 'taskFramingColumn', selectedTaskFraming);
    renderColumnItems('Context Hooks', 'contextHooksColumn', selectedContextHooks);
    
    renderSavedPresets();
    renderCustomPrompts();
}

function renderColumnItems(category, containerId, selected) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`❌ Container not found: ${containerId}`);
        return;
    }
    
    const items = allPresets.filter(p => p.category === category);
    console.log(`  - ${category}: ${items.length} items`);
    
    // Add "None" option at the beginning
    const noneOption = `
        <div class="column-item ${!selected ? 'selected' : ''}" 
             onclick="selectPresetItem('${category}', 'none')">
            <span style="font-size: 16px;">⊘</span>
            <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 600; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; font-style: italic;">
                    None
                </div>
            </div>
            ${!selected ? `
                <div style="width: 18px; height: 18px; background: linear-gradient(135deg, #64748b, #475569); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; box-shadow: 0 2px 8px rgba(100, 116, 139, 0.3); margin-left: 8px; flex-shrink: 0;">✓</div>
            ` : ''}
        </div>
    `;
    
    if (items.length === 0) {
        container.innerHTML = noneOption + `
            <div style="text-align: center; padding: 20px; color: #64748b; font-size: 11px;">
                <i class="fas fa-inbox" style="font-size: 24px; margin-bottom: 8px; opacity: 0.5;"></i>
                <div>No items yet</div>
                <div style="font-size: 9px; margin-top: 4px;">Click + to add</div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = noneOption + items.map(item => `
        <div class="column-item ${selected?.id === item.id ? 'selected' : ''}" 
             onmouseenter="
                 const actions = this.querySelector('.column-item-actions');
                 if(actions) {
                     actions.style.opacity = '1';
                     actions.style.visibility = 'visible';
                     actions.style.display = 'flex';
                 }
             "
             onmouseleave="
                 const actions = this.querySelector('.column-item-actions');
                 if(actions) actions.style.opacity = '0';
             "
             onclick="selectPresetItem('${category}', '${item.id}')">
            <span style="font-size: 20px;">${item.icon}</span>
            <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 600; color: #f1f5f9; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px;">
                    ${item.name}${!item.isDefault ? ' <span style="font-size: 10px; color: #fbbf24;">★</span>' : ''}
                </div>
            </div>
            
            <!-- ALWAYS show edit/delete buttons for ALL items (including defaults) -->
            <div class="column-item-actions" 
                 style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); display: flex !important; visibility: visible !important; gap: 4px; opacity: 0; transition: opacity 0.15s; z-index: 9999; flex-shrink: 0; background: linear-gradient(to left, rgba(30, 41, 59, 0.98) 70%, transparent); padding-left: 12px;"
                 onclick="event.stopPropagation();">
                <button onclick="editPresetItem('${item.id}', '${category}')" 
                        style="width: 24px !important; height: 24px !important; min-width: 24px !important; min-height: 24px !important; background: rgba(30, 41, 59, 0.95) !important; border: 2px solid rgba(100, 116, 139, 0.8) !important; border-radius: 4px; color: #94a3b8 !important; cursor: pointer !important; display: flex !important; align-items: center; justify-content: center; font-size: 11px !important; flex-shrink: 0; padding: 0;"
                        title="Edit"
                        onmouseenter="this.style.background='rgba(168, 85, 247, 0.3)'; this.style.color='#a78bfa';"
                        onmouseleave="this.style.background='rgba(30, 41, 59, 0.95)'; this.style.color='#94a3b8';">
                    <i class="fas fa-edit" style="pointer-events: none;"></i>
                </button>
                <button onclick="deletePresetItem('${item.id}', '${category}')" 
                        style="width: 24px !important; height: 24px !important; min-width: 24px !important; min-height: 24px !important; background: rgba(30, 41, 59, 0.95) !important; border: 2px solid rgba(100, 116, 139, 0.8) !important; border-radius: 4px; color: #94a3b8 !important; cursor: pointer !important; display: flex !important; align-items: center; justify-content: center; font-size: 11px !important; flex-shrink: 0; padding: 0;"
                        title="Delete"
                        onmouseenter="this.style.background='rgba(239, 68, 68, 0.3)'; this.style.color='#f87171';"
                        onmouseleave="this.style.background='rgba(30, 41, 59, 0.95)'; this.style.color='#94a3b8';">
                    <i class="fas fa-trash" style="pointer-events: none;"></i>
                </button>
            </div>
            
            <!-- Checkmark: GREEN for defaults, GOLD for custom -->
            ${selected?.id === item.id ? `
                <div style="width: 20px; height: 20px; background: linear-gradient(135deg, ${item.isDefault ? '#22c55e, #16a34a' : '#fbbf24, #f59e0b'}); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; box-shadow: 0 2px 8px rgba(${item.isDefault ? '34, 197, 94' : '251, 191, 36'}, 0.3); margin-left: 8px; flex-shrink: 0;">✓</div>
            ` : ''}
        </div>
    `).join('');
}

function selectPresetItem(category, id) {
    // Handle "None" selection
    if (id === 'none') {
        console.log(`✅ Deselected ${category} (None)`);
        
        if (category === 'Identity') selectedIdentity = null;
        else if (category === 'Expertise') selectedExpertise = null;
        else if (category === 'Personality') selectedPersonality = null;
        else if (category === 'Constraints') selectedConstraints = null;
        else if (category === 'Output Format') selectedOutputFormat = null;
        else if (category === 'Task Framing') selectedTaskFraming = null;
        else if (category === 'Context Hooks') selectedContextHooks = null;
        
        // Clear loaded preset indicator since user modified manually
        localStorage.removeItem('currentLoadedPresetId');
        
        renderAllColumns();
        updatePresetPreview();
        renderSavedPresets(); // Re-render to remove checkmark
        return;
    }
    
    const item = allPresets.find(p => p.id === id);
    if (!item) return;
    
    console.log(`✅ Selected ${category}:`, item.name);
    
    if (category === 'Identity') selectedIdentity = item;
    else if (category === 'Expertise') selectedExpertise = item;
    else if (category === 'Personality') selectedPersonality = item;
    else if (category === 'Constraints') selectedConstraints = item;
    else if (category === 'Output Format') selectedOutputFormat = item;
    else if (category === 'Task Framing') selectedTaskFraming = item;
    else if (category === 'Context Hooks') selectedContextHooks = item;
    
    // Clear loaded preset indicator since user modified manually
    localStorage.removeItem('currentLoadedPresetId');
    
    renderAllColumns();
    updatePresetPreview();
    renderSavedPresets(); // Re-render to remove checkmark
}

function updatePresetPreview() {
    const preview = document.getElementById('presetPreview');
    if (!preview) return;
    
    const titles = [];
    const prompts = [];
    
    // Always show all 7 categories with "-" as default
    const identityName = selectedIdentity ? selectedIdentity.name : '-';
    const expertiseName = selectedExpertise ? selectedExpertise.name : '-';
    const personalityName = selectedPersonality ? selectedPersonality.name : '-';
    const constraintsName = selectedConstraints ? selectedConstraints.name : '-';
    const outputFormatName = selectedOutputFormat ? selectedOutputFormat.name : '-';
    const approachName = selectedTaskFraming ? selectedTaskFraming.name : '-';
    const contextHooksName = selectedContextHooks ? selectedContextHooks.name : '-';
    
    // Always add all titles
    titles.push(`<div class="preview-title-line"><span class="preview-inline-title">IDENTITY:</span> <span class="preview-inline-item">${identityName}</span></div>`);
    titles.push(`<div class="preview-title-line"><span class="preview-inline-title">EXPERTISE:</span> <span class="preview-inline-item">${expertiseName}</span></div>`);
    titles.push(`<div class="preview-title-line"><span class="preview-inline-title">PERSONALITY:</span> <span class="preview-inline-item">${personalityName}</span></div>`);
    titles.push(`<div class="preview-title-line"><span class="preview-inline-title">CONSTRAINTS:</span> <span class="preview-inline-item">${constraintsName}</span></div>`);
    titles.push(`<div class="preview-title-line"><span class="preview-inline-title">OUTPUT FORMAT:</span> <span class="preview-inline-item">${outputFormatName}</span></div>`);
    titles.push(`<div class="preview-title-line"><span class="preview-inline-title">APPROACH:</span> <span class="preview-inline-item">${approachName}</span></div>`);
    titles.push(`<div class="preview-title-line"><span class="preview-inline-title">CONTEXT HOOKS:</span> <span class="preview-inline-item">${contextHooksName}</span></div>`);
    
    // Only add prompts for selected items
    if (selectedIdentity) {
        prompts.push(`<div class="preview-prompt-line">${selectedIdentity.systemPrompt}</div>`);
    }
    
    if (selectedExpertise) {
        prompts.push(`<div class="preview-prompt-line">${selectedExpertise.systemPrompt}</div>`);
    }
    
    if (selectedPersonality) {
        prompts.push(`<div class="preview-prompt-line">${selectedPersonality.systemPrompt}</div>`);
    }
    
    if (selectedConstraints) {
        prompts.push(`<div class="preview-prompt-line">${selectedConstraints.systemPrompt}</div>`);
    }
    
    if (selectedOutputFormat) {
        prompts.push(`<div class="preview-prompt-line">${selectedOutputFormat.systemPrompt}</div>`);
    }
    
    if (selectedTaskFraming) {
        prompts.push(`<div class="preview-prompt-line">${selectedTaskFraming.systemPrompt}</div>`);
    }
    
    if (selectedContextHooks) {
        prompts.push(`<div class="preview-prompt-line">${selectedContextHooks.systemPrompt}</div>`);
    }
    
    // Add custom prompts title and prompts (only selected ones)
    const allCustomPrompts = JSON.parse(localStorage.getItem('customPrompts') || '[]');
    const selectedCustomPromptsData = allCustomPrompts.filter(cp => window.selectedCustomPrompts.includes(cp.id));
    const customPromptName = selectedCustomPromptsData.length > 0 ? `${selectedCustomPromptsData.length} Custom` : '-';
    titles.push(`<div class="preview-title-line"><span class="preview-inline-title">CUSTOM:</span> <span class="preview-inline-item">${customPromptName}</span></div>`);
    
    // Add selected custom prompt content
    selectedCustomPromptsData.forEach(cp => {
        prompts.push(`<div class="preview-prompt-line">${cp.content}</div>`);
    });
    
    if (prompts.length === 0) {
        // Show titles with all "-", and placeholder message
        preview.innerHTML = `
            <div class="preview-single-box">
                <div class="preview-titles-section">
                    ${titles.join('')}
                </div>
                <div class="preview-prompt-divider"></div>
                <div class="preview-placeholder-text">
                    Select components to see prompts
                </div>
            </div>
        `;
    } else {
        // Show titles with selected items, and their prompts
        preview.innerHTML = `
            <div class="preview-single-box">
                <div class="preview-titles-section">
                    ${titles.join('')}
                </div>
                <div class="preview-prompt-divider"></div>
                <div class="preview-prompts-section">
                    ${prompts.join('')}
                </div>
            </div>
        `;
    }
}

function copyPromptToClipboard() {
    const parts = [];
    
    if (selectedIdentity) parts.push(`[IDENTITY]\n${selectedIdentity.systemPrompt}`);
    if (selectedExpertise) parts.push(`[EXPERTISE]\n${selectedExpertise.systemPrompt}`);
    if (selectedPersonality) parts.push(`[PERSONALITY]\n${selectedPersonality.systemPrompt}`);
    if (selectedConstraints) parts.push(`[CONSTRAINTS]\n${selectedConstraints.systemPrompt}`);
    if (selectedOutputFormat) parts.push(`[OUTPUT FORMAT]\n${selectedOutputFormat.systemPrompt}`);
    if (selectedTaskFraming) parts.push(`[TASK FRAMING]\n${selectedTaskFraming.systemPrompt}`);
    if (selectedContextHooks) parts.push(`[CONTEXT HOOKS]\n${selectedContextHooks.systemPrompt}`);
    
    if (parts.length === 0) {
        showToast('No prompt to copy', 'warning');
        return;
    }
    
    const prompt = parts.join('\n\n');
    navigator.clipboard.writeText(prompt).then(() => {
        showToast('Prompt copied to clipboard!', 'success');
    });
}

function renderSavedPresets() {
    const container = document.getElementById('savedPresetsColumn');
    if (!container) return;
    
    const savedPresets = JSON.parse(localStorage.getItem('savedCompletePresets') || '[]');
    const currentLoadedPreset = localStorage.getItem('currentLoadedPresetId') || null;
    
    // Check if nothing is selected (all are null)
    const nothingSelected = !selectedIdentity && !selectedExpertise && !selectedPersonality && 
                           !selectedConstraints && !selectedOutputFormat && !selectedTaskFraming && 
                           !selectedContextHooks && window.selectedCustomPrompts.length === 0;
    
    // None option (Clear All)
    const noneOption = `
        <div class="saved-preset-card ${nothingSelected ? 'loaded' : ''}" 
             onclick="clearAllSelections()">
            <span style="font-size: 22px;">⊘</span>
            <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 600; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14px; font-style: italic;">
                    None (Clear All)
                </div>
                <div style="font-size: 11px; color: #64748b; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    Deselect everything
                </div>
            </div>
            ${nothingSelected ? `
                <div style="width: 20px; height: 20px; background: linear-gradient(135deg, #64748b, #475569); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; box-shadow: 0 2px 8px rgba(100, 116, 139, 0.3); margin-left: 8px; flex-shrink: 0;">✓</div>
            ` : ''}
        </div>
    `;
    
    if (savedPresets.length === 0) {
        container.innerHTML = noneOption + `
            <div style="text-align: center; padding: 30px 20px; color: #64748b;">
                <i class="fas fa-bookmark" style="font-size: 36px; margin-bottom: 12px; opacity: 0.3;"></i>
                <div style="font-size: 12px; margin-bottom: 4px;">No saved presets yet</div>
                <div style="font-size: 10px; opacity: 0.7;">Configure an agent and click "Save Current"</div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = noneOption + savedPresets.map(preset => `
        <div class="saved-preset-card ${currentLoadedPreset === preset.id ? 'loaded' : ''}" 
             onmouseenter="
                 const actions = this.querySelector('.saved-preset-actions');
                 if(actions) actions.style.opacity = '1';
             "
             onmouseleave="
                 const actions = this.querySelector('.saved-preset-actions');
                 if(actions) actions.style.opacity = '0.3';
             "
             onclick="loadSavedPreset('${preset.id}')">
            <span style="font-size: 22px;">${preset.icon || '⭐'}</span>
            <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 600; color: #f1f5f9; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14px;">
                    ${preset.name}
                </div>
                <div style="font-size: 11px; color: #64748b; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${preset.description || 'Custom preset'}
                </div>
            </div>
            <div class="saved-preset-actions" 
                 style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); display: flex; gap: 4px; opacity: 0; transition: opacity 0.15s; z-index: 999; background: linear-gradient(to left, rgba(30, 41, 59, 0.98) 70%, transparent); padding-left: 12px;"
                 onclick="event.stopPropagation();">
                <button onclick="editSavedPreset('${preset.id}')" 
                        style="width: 24px; height: 24px; min-width: 24px; min-height: 24px; background: rgba(30, 41, 59, 0.95); border: 2px solid rgba(100, 116, 139, 0.8); border-radius: 4px; color: #94a3b8; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 11px; padding: 0;"
                        title="Edit"
                        onmouseenter="this.style.background='rgba(168, 85, 247, 0.3)'; this.style.color='#a78bfa';"
                        onmouseleave="this.style.background='rgba(30, 41, 59, 0.95)'; this.style.color='#94a3b8';">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteSavedPreset('${preset.id}')" 
                        style="width: 24px; height: 24px; min-width: 24px; min-height: 24px; background: rgba(30, 41, 59, 0.95); border: 2px solid rgba(100, 116, 139, 0.8); border-radius: 4px; color: #94a3b8; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 11px; padding: 0;"
                        title="Delete"
                        onmouseenter="this.style.background='rgba(239, 68, 68, 0.3)'; this.style.color='#f87171';"
                        onmouseleave="this.style.background='rgba(30, 41, 59, 0.95)'; this.style.color='#94a3b8';">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            ${currentLoadedPreset === preset.id ? `
                <div style="width: 20px; height: 20px; background: linear-gradient(135deg, #22c55e, #16a34a); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3); margin-left: 8px; flex-shrink: 0;">✓</div>
            ` : ''}
        </div>
    `).join('');
}

function clearAllSelections() {
    console.log('🔄 Clearing all selections...');
    
    // Clear all category selections
    selectedIdentity = null;
    selectedExpertise = null;
    selectedPersonality = null;
    selectedConstraints = null;
    selectedOutputFormat = null;
    selectedTaskFraming = null;
    selectedContextHooks = null;
    
    // Clear custom prompts selection
    window.selectedCustomPrompts = [];
    
    // Clear loaded preset indicator
    localStorage.removeItem('currentLoadedPresetId');
    
    // Re-render everything
    renderAllColumns();
    updatePresetPreview();
    renderSavedPresets();
    
    showToast('All selections cleared', 'success');
}
window.clearAllSelections = clearAllSelections; // Make globally accessible

function saveCurrentAsPreset() {
    if (!selectedIdentity && !selectedExpertise && !selectedPersonality && 
        !selectedConstraints && !selectedOutputFormat && !selectedTaskFraming && 
        !selectedContextHooks && window.selectedCustomPrompts.length === 0) {
        showToast('Select at least one component first', 'warning');
        return;
    }
    
    // Auto-generate name from selected components
    const components = [];
    if (selectedIdentity) components.push(selectedIdentity.name);
    if (selectedExpertise) components.push(selectedExpertise.name);
    if (selectedPersonality) components.push(selectedPersonality.name);
    
    const autoName = components.length > 0 ? components.join(' + ') : 'Custom Agent';
    
    // Save directly without dialog
    const preset = {
        id: `saved_${Date.now()}`,
        name: autoName,
        description: `Saved on ${new Date().toLocaleString()}`,
        icon: selectedIdentity?.icon || '⭐',
        identity: selectedIdentity?.id || null,
        expertise: selectedExpertise?.id || null,
        personality: selectedPersonality?.id || null,
        constraints: selectedConstraints?.id || null,
        outputFormat: selectedOutputFormat?.id || null,
        taskFraming: selectedTaskFraming?.id || null,
        contextHooks: selectedContextHooks?.id || null,
        customPrompts: window.selectedCustomPrompts || []
    };
    
    const savedPresets = JSON.parse(localStorage.getItem('savedCompletePresets') || '[]');
    savedPresets.push(preset);
    localStorage.setItem('savedCompletePresets', JSON.stringify(savedPresets));
    
    // Auto-load the newly saved preset
    localStorage.setItem('currentLoadedPresetId', preset.id);
    
    renderSavedPresets();
    updateCurrentPreset();
    showToast(`✅ Saved as "${autoName}"`, 'success');
}

function confirmAddNewPreset() {
    const name = document.getElementById('newPresetName').value.trim();
    const desc = document.getElementById('newPresetDesc').value.trim();
    const icon = document.getElementById('newPresetIcon').value.trim();
    
    if (!name) {
        showToast('Please enter a name', 'error');
        return;
    }
    
    // Buat preset kosong baru
    const preset = {
        id: `saved_${Date.now()}`,
        name: name,
        description: desc || 'New preset',
        icon: icon || '⭐',
        identity: null,
        expertise: null,
        personality: null,
        constraints: null,
        outputFormat: null,
        taskFraming: null,
        contextHooks: null,
        customPrompts: []
    };
    
    const savedPresets = JSON.parse(localStorage.getItem('savedCompletePresets') || '[]');
    savedPresets.push(preset);
    localStorage.setItem('savedCompletePresets', JSON.stringify(savedPresets));
    
    // Load preset baru ini
    loadSavedPreset(preset.id);
    
    document.querySelector('.custom-prompt-overlay').remove();
    renderSavedPresets();
    showToast(`✅ Created: ${name}`, 'success');
}

function loadSavedPreset(id) {
    const savedPresets = JSON.parse(localStorage.getItem('savedCompletePresets') || '[]');
    const preset = savedPresets.find(p => p.id === id);
    
    if (!preset) {
        showToast('Preset not found', 'error');
        return;
    }
    
    selectedIdentity = allPresets.find(p => p.id === preset.identity) || null;
    selectedExpertise = allPresets.find(p => p.id === preset.expertise) || null;
    selectedPersonality = allPresets.find(p => p.id === preset.personality) || null;
    selectedConstraints = allPresets.find(p => p.id === preset.constraints) || null;
    selectedOutputFormat = allPresets.find(p => p.id === preset.outputFormat) || null;
    selectedTaskFraming = allPresets.find(p => p.id === preset.taskFraming) || null;
    selectedContextHooks = allPresets.find(p => p.id === preset.contextHooks) || null;
    
    // Load custom prompts if available
    window.selectedCustomPrompts = preset.customPrompts || [];
    
    // Track loaded preset
    localStorage.setItem('currentLoadedPresetId', id);
    
    renderAllColumns();
    updatePresetPreview();
    renderSavedPresets(); // Re-render to show checkmark
    updateCurrentPreset(); // Update the main button
    showToast(`✔ Loaded: ${preset.name}`, 'success');
}

function editSavedPreset(id) {
    const savedPresets = JSON.parse(localStorage.getItem('savedCompletePresets') || '[]');
    const preset = savedPresets.find(p => p.id === id);
    
    if (!preset) return;
    
    // Create custom dialog with both name and description fields
    const overlay = document.createElement('div');
    overlay.className = 'custom-prompt-overlay';
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        background: #1e293b;
        border: 1px solid #475569;
        border-radius: 12px;
        padding: 24px;
        width: 500px;
        max-width: 90vw;
    `;
    
    dialog.innerHTML = `
        <h3 style="margin: 0 0 20px 0; color: #f1f5f9; font-size: 18px;">Edit Preset</h3>
        
        <div style="margin-bottom: 16px;">
            <label style="display: block; margin-bottom: 8px; color: #94a3b8; font-size: 13px; font-weight: 600;">Name:</label>
            <input type="text" id="editPresetName" value="${preset.name}" 
                   style="width: 100%; padding: 10px; background: #0f172a; border: 1px solid #475569; border-radius: 6px; color: #f1f5f9; font-size: 14px; box-sizing: border-box;">
        </div>
        
        <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; color: #94a3b8; font-size: 13px; font-weight: 600;">Description:</label>
            <textarea id="editPresetDescription" rows="3"
                      style="width: 100%; padding: 10px; background: #0f172a; border: 1px solid #475569; border-radius: 6px; color: #f1f5f9; font-size: 14px; box-sizing: border-box; resize: vertical; font-family: inherit;">${preset.description || ''}</textarea>
        </div>
        
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="cancelEditPreset" style="padding: 10px 20px; background: #475569; border: none; border-radius: 6px; color: #f1f5f9; cursor: pointer; font-size: 14px;">Cancel</button>
            <button id="saveEditPreset" style="padding: 10px 20px; background: #a78bfa; border: none; border-radius: 6px; color: #1e293b; cursor: pointer; font-size: 14px; font-weight: 600;">Save</button>
        </div>
    `;
    
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    
    // Focus name input
    setTimeout(() => document.getElementById('editPresetName').focus(), 100);
    
    // Cancel button
    document.getElementById('cancelEditPreset').onclick = () => {
        document.body.removeChild(overlay);
    };
    
    // Save button
    document.getElementById('saveEditPreset').onclick = () => {
        const name = document.getElementById('editPresetName').value.trim();
        const description = document.getElementById('editPresetDescription').value.trim();
        
        if (!name) {
            showToast('Please enter a name', 'error');
            return;
        }
        
        preset.name = name;
        preset.description = description || 'Custom preset';
        
        localStorage.setItem('savedCompletePresets', JSON.stringify(savedPresets));
        
        document.body.removeChild(overlay);
        renderSavedPresets();
        showToast('Preset updated!', 'success');
    };
    
    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    };
    
    // Close on Escape
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function deleteSavedPreset(id) {
    showConfirm('Delete this saved preset?', () => {
        let savedPresets = JSON.parse(localStorage.getItem('savedCompletePresets') || '[]');
        savedPresets = savedPresets.filter(p => p.id !== id);
        localStorage.setItem('savedCompletePresets', JSON.stringify(savedPresets));
        
        renderSavedPresets();
        showToast('Preset deleted!', 'success');
    });
}

// ========== CUSTOM PROMPTS FUNCTIONS ==========

// Make explicitly global
window.selectedCustomPrompts = window.selectedCustomPrompts || []; // Track multiple selected custom prompts

function renderCustomPrompts() {
    const container = document.getElementById('customPromptColumn');
    if (!container) return;
    
    let customPrompts = JSON.parse(localStorage.getItem('customPrompts') || '[]');
    console.log('Custom prompts loaded:', customPrompts);
    
    // Fix any prompts without IDs
    let needsSave = false;
    customPrompts = customPrompts.map(prompt => {
        if (!prompt.id) {
            console.warn('Prompt without ID, generating:', prompt);
            prompt.id = `custom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            needsSave = true;
        }
        return prompt;
    });
    
    if (needsSave) {
        localStorage.setItem('customPrompts', JSON.stringify(customPrompts));
        console.log('Saved prompts with generated IDs');
    }
    
    if (customPrompts.length === 0) {
        container.innerHTML = `
            <div style="padding: 20px; text-align: center; color: #64748b; font-size: 11px;">
                No custom prompts
            </div>
        `;
        return;
    }
    
    container.innerHTML = customPrompts.map(prompt => {
        console.log('Rendering prompt:', prompt);
        const isSelected = window.selectedCustomPrompts.includes(prompt.id);
        return `
        <div class="column-item ${isSelected ? 'selected' : ''}" onclick="toggleCustomPrompt('${prompt.id}')">
            <span style="font-size: 18px;">📝</span>
            <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 600; color: #f1f5f9; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px;">
                    ${prompt.name}
                </div>
            </div>
            
            ${isSelected ? '<i class="fas fa-check-circle" style="color: #22c55e; font-size: 16px; margin-left: 8px;"></i>' : ''}
            
            <div class="column-item-actions" onclick="event.stopPropagation();">
                <button onclick="editCustomPrompt('${prompt.id}', event)" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteCustomPrompt('${prompt.id}', event)" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    }).join('');
}

function toggleCustomPrompt(id) {
    console.log('Toggle custom prompt:', id);
    const index = window.selectedCustomPrompts.indexOf(id);
    if (index > -1) {
        window.selectedCustomPrompts.splice(index, 1);
    } else {
        window.selectedCustomPrompts.push(id);
    }
    renderCustomPrompts();
    updatePresetPreview();
}
window.toggleCustomPrompt = toggleCustomPrompt; // Make globally accessible

function showAddCustomPromptDialog() {
    // Create custom dialog with both name and content fields
    const overlay = document.createElement('div');
    overlay.className = 'custom-prompt-overlay';
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        background: #1e293b;
        border: 1px solid #475569;
        border-radius: 12px;
        padding: 24px;
        width: 500px;
        max-width: 90vw;
    `;
    
    dialog.innerHTML = `
        <h3 style="margin: 0 0 20px 0; color: #f1f5f9; font-size: 18px;">Add Custom Prompt</h3>
        
        <div style="margin-bottom: 16px;">
            <label style="display: block; margin-bottom: 8px; color: #94a3b8; font-size: 13px; font-weight: 600;">Name:</label>
            <input type="text" id="addPromptName" placeholder="e.g., Reminder, Budget Note..."
                   style="width: 100%; padding: 10px; background: #0f172a; border: 1px solid #475569; border-radius: 6px; color: #f1f5f9; font-size: 14px; box-sizing: border-box;">
        </div>
        
        <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; color: #94a3b8; font-size: 13px; font-weight: 600;">Content:</label>
            <textarea id="addPromptContent" rows="6" placeholder="Enter your custom prompt content..."
                      style="width: 100%; padding: 10px; background: #0f172a; border: 1px solid #475569; border-radius: 6px; color: #f1f5f9; font-size: 14px; box-sizing: border-box; resize: vertical; font-family: inherit;"></textarea>
        </div>
        
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="cancelAdd" style="padding: 10px 20px; background: #475569; border: none; border-radius: 6px; color: #f1f5f9; cursor: pointer; font-size: 14px;">Cancel</button>
            <button id="saveAdd" style="padding: 10px 20px; background: #22c55e; border: none; border-radius: 6px; color: #0f172a; cursor: pointer; font-size: 14px; font-weight: 600;">Add</button>
        </div>
    `;
    
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    
    // Focus name input
    setTimeout(() => document.getElementById('addPromptName').focus(), 100);
    
    // Cancel button
    document.getElementById('cancelAdd').onclick = () => {
        document.body.removeChild(overlay);
    };
    
    // Save button
    document.getElementById('saveAdd').onclick = () => {
        const name = document.getElementById('addPromptName').value.trim();
        const content = document.getElementById('addPromptContent').value.trim();
        
        if (!name) {
            showToast('Please enter a name', 'error');
            return;
        }
        
        if (!content) {
            showToast('Please enter content', 'error');
            return;
        }
        
        const prompt = {
            id: `custom_${Date.now()}`,
            name: name,
            content: content
        };
        
        const customPrompts = JSON.parse(localStorage.getItem('customPrompts') || '[]');
        customPrompts.push(prompt);
        localStorage.setItem('customPrompts', JSON.stringify(customPrompts));
        
        document.body.removeChild(overlay);
        renderCustomPrompts();
        updatePresetPreview();
        showToast('Custom prompt added!', 'success');
    };
    
    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    };
    
    // Close on Escape
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function editCustomPrompt(id, event) {
    console.log('Edit custom prompt:', id, event);
    if (event) event.stopPropagation(); // Prevent item selection
    
    const customPrompts = JSON.parse(localStorage.getItem('customPrompts') || '[]');
    const prompt = customPrompts.find(p => p.id === id);
    
    if (!prompt) return;
    
    // Create custom dialog with both name and content fields
    const overlay = document.createElement('div');
    overlay.className = 'custom-prompt-overlay';
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        background: #1e293b;
        border: 1px solid #475569;
        border-radius: 12px;
        padding: 24px;
        width: 500px;
        max-width: 90vw;
    `;
    
    dialog.innerHTML = `
        <h3 style="margin: 0 0 20px 0; color: #f1f5f9; font-size: 18px;">Edit Custom Prompt</h3>
        
        <div style="margin-bottom: 16px;">
            <label style="display: block; margin-bottom: 8px; color: #94a3b8; font-size: 13px; font-weight: 600;">Name:</label>
            <input type="text" id="editPromptName" value="${prompt.name}" 
                   style="width: 100%; padding: 10px; background: #0f172a; border: 1px solid #475569; border-radius: 6px; color: #f1f5f9; font-size: 14px; box-sizing: border-box;">
        </div>
        
        <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; color: #94a3b8; font-size: 13px; font-weight: 600;">Content:</label>
            <textarea id="editPromptContent" rows="6"
                      style="width: 100%; padding: 10px; background: #0f172a; border: 1px solid #475569; border-radius: 6px; color: #f1f5f9; font-size: 14px; box-sizing: border-box; resize: vertical; font-family: inherit;">${prompt.content}</textarea>
        </div>
        
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="cancelEdit" style="padding: 10px 20px; background: #475569; border: none; border-radius: 6px; color: #f1f5f9; cursor: pointer; font-size: 14px;">Cancel</button>
            <button id="saveEdit" style="padding: 10px 20px; background: #a78bfa; border: none; border-radius: 6px; color: #1e293b; cursor: pointer; font-size: 14px; font-weight: 600;">Save</button>
        </div>
    `;
    
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    
    // Focus name input
    setTimeout(() => document.getElementById('editPromptName').focus(), 100);
    
    // Cancel button
    document.getElementById('cancelEdit').onclick = () => {
        document.body.removeChild(overlay);
    };
    
    // Save button
    document.getElementById('saveEdit').onclick = () => {
        const name = document.getElementById('editPromptName').value.trim();
        const content = document.getElementById('editPromptContent').value.trim();
        
        if (!name) {
            showToast('Please enter a name', 'error');
            return;
        }
        
        if (!content) {
            showToast('Please enter content', 'error');
            return;
        }
        
        prompt.name = name;
        prompt.content = content;
        
        localStorage.setItem('customPrompts', JSON.stringify(customPrompts));
        
        document.body.removeChild(overlay);
        renderCustomPrompts();
        updatePresetPreview();
        showToast('Custom prompt updated!', 'success');
    };
    
    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    };
    
    // Close on Escape
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}
window.editCustomPrompt = editCustomPrompt; // Make globally accessible

function deleteCustomPrompt(id, event) {
    console.log('Delete custom prompt:', id, event);
    if (event) event.stopPropagation(); // Prevent item selection
    
    showConfirm('Delete this custom prompt?', () => {
        let customPrompts = JSON.parse(localStorage.getItem('customPrompts') || '[]');
        customPrompts = customPrompts.filter(p => p.id !== id);
        localStorage.setItem('customPrompts', JSON.stringify(customPrompts));
        
        // Remove from selection if selected
        const index = window.selectedCustomPrompts.indexOf(id);
        if (index > -1) {
            window.selectedCustomPrompts.splice(index, 1);
        }
        
        renderCustomPrompts();
        updatePresetPreview();
        showToast('Custom prompt deleted!', 'success');
    });
}
window.deleteCustomPrompt = deleteCustomPrompt; // Make globally accessible

function showAddPresetDialog(cat) {
    const overlay = document.createElement('div');
    overlay.className = 'custom-prompt-overlay';
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        z-index: 10003;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    overlay.innerHTML = `
        <div style="background: #0f172a; border: 1px solid rgba(100,116,139,0.5); border-radius: 16px; padding: 24px; max-width: 500px; width: 90%;">
            <h3 style="color: #f1f5f9; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-plus-circle" style="color: #22c55e;"></i>
                Add ${cat}
            </h3>
            <input type="text" id="newPresetName" placeholder="Name (e.g., 'Creative Writer')" style="width: 100%; padding: 10px; margin-bottom: 12px; background: rgba(30,41,59,0.5); border: 1px solid rgba(100,116,139,0.5); border-radius: 8px; color: #f1f5f9;">
            <input type="text" id="newPresetDesc" placeholder="Description (optional)" style="width: 100%; padding: 10px; margin-bottom: 12px; background: rgba(30,41,59,0.5); border: 1px solid rgba(100,116,139,0.5); border-radius: 8px; color: #f1f5f9;">
            <textarea id="newPresetPrompt" rows="5" placeholder="System prompt..." style="width: 100%; padding: 10px; margin-bottom: 16px; background: rgba(30,41,59,0.5); border: 1px solid rgba(100,116,139,0.5); border-radius: 8px; color: #f1f5f9; resize: vertical;"></textarea>
            <div style="display: flex; gap: 10px;">
                <button id="cancelAdd" style="flex: 1; padding: 10px; background: rgba(100,116,139,0.2); border: 1px solid rgba(100,116,139,0.5); color: #cbd5e1; border-radius: 8px; cursor: pointer; font-weight: 500;">Cancel</button>
                <button id="confirmAdd" style="flex: 1; padding: 10px; background: linear-gradient(to right, #22c55e, #16a34a); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">Add</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const nameInput = document.getElementById('newPresetName');
    setTimeout(() => nameInput.focus(), 100);
    
    document.getElementById('cancelAdd').onclick = () => overlay.remove();
    document.getElementById('confirmAdd').onclick = () => {
        const name = document.getElementById('newPresetName').value.trim();
        const desc = document.getElementById('newPresetDesc').value.trim();
        const prompt = document.getElementById('newPresetPrompt').value.trim();
        
        if (!name || !prompt) {
            showToast('Name and prompt are required', 'warning');
            return;
        }
        
        allPresets.push({ 
            id: `custom_${Date.now()}`, 
            name, 
            icon: '⭐', 
            description: desc || 'Custom', 
            systemPrompt: prompt, 
            isDefault: false, 
            category: cat 
        });
        
        saveCustomPresets();
        overlay.remove();
        renderAllColumns();
        showToast(`${cat} added!`, 'success');
    };
}

function deletePresetItem(id) {
    showConfirm('Delete this item?', () => {
        allPresets = allPresets.filter(p => p.id !== id);
        saveCustomPresets();
        renderAllColumns();
        showToast('Deleted', 'success');
    });
}

function renderModelModal() {
    return `
        <div id="modelModal" class="modal-overlay">
            <div class="modal" style="max-width: 600px;">
                <div class="modal-header">
                    <h2 class="modal-title">Select Model</h2>
                    <button class="modal-close-btn" onclick="hideModelModal()"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-content" style="padding: 24px;">
                    ${models.map(m => `
                        <div class="model-option ${selectedModel === m.id ? 'selected' : ''}" onclick="selectModel('${m.id}')">
                            <span style="font-size: 24px;">${m.icon}</span>
                            <div style="flex: 1;">
                                <div style="font-weight: 600; color: #f1f5f9;">${m.name}</div>
                                <div style="font-size: 12px; color: #94a3b8;">${m.provider}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="modal-footer">
                    <button class="modal-done-btn" onclick="hideModelModal()">Done</button>
                </div>
            </div>
        </div>
    `;
}

function showModelModal() { document.getElementById('modelModal').classList.add('show'); }
function hideModelModal() { document.getElementById('modelModal').classList.remove('show'); }
function selectModel(id) { selectedModel = id; updateModelDisplay(); hideModelModal(); }

function renderProfileModal() {
    return `
        <div id="profileModal" class="modal-overlay">
            <div class="modal" style="max-width: 500px;">
                <div class="modal-header">
                    <h2 class="modal-title">Profile</h2>
                    <button class="modal-close-btn" onclick="hideProfileModal()"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-content" style="padding: 24px; text-align: center;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #a855f7, #3b82f6); border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 40px;">👤</div>
                    <div style="font-size: 20px; font-weight: 700; color: #f1f5f9; margin-bottom: 8px;">John Doe</div>
                    <div style="color: #94a3b8;">john@example.com</div>
                </div>
                <div class="modal-footer">
                    <button class="modal-done-btn" onclick="hideProfileModal()">Close</button>
                </div>
            </div>
        </div>
    `;
}

function showProfileModal() { document.getElementById('profileModal').classList.add('show'); }
function hideProfileModal() { document.getElementById('profileModal').classList.remove('show'); }

function editPresetItem(id, cat) {
    const item = allPresets.find(p => p.id === id);
    if (!item) {
        showToast('Item not found', 'error');
        return;
    }
    
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); z-index: 10004; display: flex; align-items: center; justify-content: center;';
    
    overlay.innerHTML = `
        <div style="background: #0f172a; border: 1px solid rgba(100,116,139,0.5); border-radius: 16px; padding: 24px; max-width: 500px; width: 90%;">
            <h3 style="color: #f1f5f9; margin-bottom: 16px;">Edit ${cat}</h3>
            <input type="text" id="editName" value="${item.name}" placeholder="Name" style="width: 100%; padding: 10px; margin-bottom: 12px; background: rgba(30,41,59,0.5); border: 1px solid rgba(100,116,139,0.5); border-radius: 8px; color: #f1f5f9;">
            <input type="text" id="editDesc" value="${item.description}" placeholder="Description" style="width: 100%; padding: 10px; margin-bottom: 12px; background: rgba(30,41,59,0.5); border: 1px solid rgba(100,116,139,0.5); border-radius: 8px; color: #f1f5f9;">
            <textarea id="editPrompt" rows="5" style="width: 100%; padding: 10px; margin-bottom: 16px; background: rgba(30,41,59,0.5); border: 1px solid rgba(100,116,139,0.5); border-radius: 8px; color: #f1f5f9;">${item.systemPrompt}</textarea>
            <div style="display: flex; gap: 10px;">
                <button id="editCancel" style="flex: 1; padding: 10px; background: rgba(100,116,139,0.2); border: 1px solid rgba(100,116,139,0.5); color: #cbd5e1; border-radius: 8px; cursor: pointer;">Cancel</button>
                <button id="editSave" style="flex: 1; padding: 10px; background: linear-gradient(to right, #a855f7, #3b82f6); color: white; border: none; border-radius: 8px; cursor: pointer;">Save</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    document.getElementById('editCancel').onclick = () => overlay.remove();
    document.getElementById('editSave').onclick = () => {
        item.name = document.getElementById('editName').value.trim();
        item.description = document.getElementById('editDesc').value.trim();
        item.systemPrompt = document.getElementById('editPrompt').value.trim();
        
        saveCustomPresets();
        renderAllColumns();
        updatePresetPreview();
        overlay.remove();
        showToast(`${cat} updated!`, 'success');
    };
}

function deletePresetItem(id, cat) {
    showConfirm('Delete this item?', () => {
        allPresets = allPresets.filter(p => p.id !== id);
        
        if (selectedIdentity?.id === id) selectedIdentity = null;
        if (selectedExpertise?.id === id) selectedExpertise = null;
        if (selectedPersonality?.id === id) selectedPersonality = null;
        if (selectedConstraints?.id === id) selectedConstraints = null;
        if (selectedOutputFormat?.id === id) selectedOutputFormat = null;
        if (selectedTaskFraming?.id === id) selectedTaskFraming = null;
        if (selectedContextHooks?.id === id) selectedContextHooks = null;
        
        saveCustomPresets();
        renderAllColumns();
        updatePresetPreview();
        showToast('Deleted!', 'success');
    });
}

function quickAddNewPreset() {
    showUnifiedModal('preset');
    
    // Show a helper toast
    setTimeout(() => {
        showToast('💡 Select components, then click "Save Current" to create a preset', 'info', 4000);
    }, 500);
}

window.quickAddNewPreset = quickAddNewPreset;