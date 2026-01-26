function renderModals() {
    return `${renderUnifiedModal()}${renderModelModal()}${renderProfileModal()}`;
}

function renderUnifiedModal() {
    return `
        <div id="unifiedModal" class="modal-overlay">
            <div class="modal">
                <div class="modal-header">
                    <h2 class="modal-title">🤖 AI Agent Builder</h2>
                    <button class="modal-close-btn" onclick="hideUnifiedModal()"><i class="fas fa-times"></i></button>
                </div>
                
                <div class="unified-modal-content">
                    <div class="seven-column-layout">
                        <div class="column-panel">
                            <div class="column-header">
                                <span><i class="fas fa-user-tie"></i> Identity</span>
                                <button class="column-info-btn" onclick="showColumnInfo('identity')"><i class="fas fa-question-circle"></i></button>
                            </div>
                            <div class="column-content" id="identityColumn"></div>
                            <button class="add-new-btn" onclick="showAddPresetDialog('Identity')"><i class="fas fa-plus"></i> Add</button>
                        </div>
                        
                        <div class="column-panel">
                            <div class="column-header">
                                <span><i class="fas fa-brain"></i> Expertise</span>
                                <button class="column-info-btn" onclick="showColumnInfo('expertise')"><i class="fas fa-question-circle"></i></button>
                            </div>
                            <div class="column-content" id="expertiseColumn"></div>
                            <button class="add-new-btn" onclick="showAddPresetDialog('Expertise')"><i class="fas fa-plus"></i> Add</button>
                        </div>
                        
                        <div class="column-panel">
                            <div class="column-header">
                                <span><i class="fas fa-comments"></i> Personality</span>
                                <button class="column-info-btn" onclick="showColumnInfo('personality')"><i class="fas fa-question-circle"></i></button>
                            </div>
                            <div class="column-content" id="personalityColumn"></div>
                            <button class="add-new-btn" onclick="showAddPresetDialog('Personality')"><i class="fas fa-plus"></i> Add</button>
                        </div>
                        
                        <div class="column-panel">
                            <div class="column-header">
                                <span><i class="fas fa-ban"></i> Constraints</span>
                                <button class="column-info-btn" onclick="showColumnInfo('constraints')"><i class="fas fa-question-circle"></i></button>
                            </div>
                            <div class="column-content" id="constraintsColumn"></div>
                            <button class="add-new-btn" onclick="showAddPresetDialog('Constraints')"><i class="fas fa-plus"></i> Add</button>
                        </div>
                        
                        <div class="column-panel">
                            <div class="column-header">
                                <span><i class="fas fa-file-alt"></i> Output</span>
                                <button class="column-info-btn" onclick="showColumnInfo('output')"><i class="fas fa-question-circle"></i></button>
                            </div>
                            <div class="column-content" id="outputFormatColumn"></div>
                            <button class="add-new-btn" onclick="showAddPresetDialog('Output Format')"><i class="fas fa-plus"></i> Add</button>
                        </div>
                        
                        <div class="column-panel">
                            <div class="column-header">
                                <span><i class="fas fa-tasks"></i> Approach</span>
                                <button class="column-info-btn" onclick="showColumnInfo('task')"><i class="fas fa-question-circle"></i></button>
                            </div>
                            <div class="column-content" id="taskFramingColumn"></div>
                            <button class="add-new-btn" onclick="showAddPresetDialog('Task Framing')"><i class="fas fa-plus"></i> Add</button>
                        </div>
                        
                        <div class="column-panel">
                            <div class="column-header">
                                <span><i class="fas fa-link"></i> Context</span>
                                <button class="column-info-btn" onclick="showColumnInfo('context')"><i class="fas fa-question-circle"></i></button>
                            </div>
                            <div class="column-content" id="contextHooksColumn"></div>
                            <button class="add-new-btn" onclick="showAddPresetDialog('Context Hooks')"><i class="fas fa-plus"></i> Add</button>
                        </div>
                    </div>
                    
                    <div class="preview-panel-bottom">
                        <div class="preview-header">
                            <h3><i class="fas fa-eye"></i> Combined Prompt</h3>
                            <button onclick="copyPromptToClipboard()" class="copy-btn"><i class="fas fa-copy"></i> Copy</button>
                        </div>
                        <div id="presetPreview" class="preview-content"></div>
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

function showColumnInfo(type) {
    const info = {
        identity: { title: '🎭 Identity', desc: 'WHO is the AI? Define role and persona.', ex: ['Data Analyst', 'Teacher', 'Consultant'] },
        expertise: { title: '🧠 Expertise', desc: 'WHAT does it know? Domain knowledge.', ex: ['Statistics', 'Finance', 'Marketing'] },
        personality: { title: '💬 Personality', desc: 'HOW does it talk? Tone and style.', ex: ['Professional', 'Friendly', 'Direct'] },
        constraints: { title: '🚫 Constraints', desc: 'What it CANNOT do. Rules.', ex: ['No speculation', 'Cite sources', 'Brief'] },
        output: { title: '📄 Output', desc: 'HOW to structure responses.', ex: ['Exec Summary', 'Bullets', 'Steps'] },
        task: { title: '🎯 Approach', desc: 'HOW to solve problems.', ex: ['Problem-Solution', 'Analysis', 'Teaching'] },
        context: { title: '🔗 Context', desc: 'Dynamic placeholders for context.', ex: ['{{DOCUMENT}}', '{{HISTORY}}', '{{USER}}'] }
    };
    
    const d = info[type];
    const overlay = document.createElement('div');
    overlay.className = 'custom-prompt-overlay';
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); z-index: 10002; display: flex; align-items: center; justify-content: center;';
    
    overlay.innerHTML = `
        <div style="background: #0f172a; border: 1px solid rgba(100,116,139,0.5); border-radius: 16px; padding: 24px; max-width: 500px; width: 90%;">
            <div style="font-size: 20px; font-weight: 700; color: #f1f5f9; margin-bottom: 12px;">${d.title}</div>
            <div style="color: #cbd5e1; font-size: 14px; margin-bottom: 16px;">${d.desc}</div>
            <div style="background: rgba(30,41,59,0.5); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
                <div style="font-size: 12px; font-weight: 600; color: #a78bfa; margin-bottom: 8px;">Examples:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 12px; color: #cbd5e1;">
                    ${d.ex.map(e => `<li>${e}</li>`).join('')}
                </ul>
            </div>
            <button onclick="this.closest('.custom-prompt-overlay').remove()" style="width: 100%; padding: 10px; background: linear-gradient(to right, #a855f7, #3b82f6); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                Got it!
            </button>
        </div>
    `;
    document.body.appendChild(overlay);
}

function copyPromptToClipboard() {
    const preview = document.getElementById('presetPreview');
    const code = preview.querySelector('.preview-code');
    if (code) {
        navigator.clipboard.writeText(code.textContent).then(() => {
            showToast('Prompt copied!', 'success', 2000);
        });
    }
}

function showUnifiedModal() {
    const modal = document.getElementById('unifiedModal');
    if (!modal) return;
    modal.classList.add('show');
    
    // ✅ FIX: Delay rendering untuk ensure DOM ready
    setTimeout(() => {
        renderAllColumns();
        updatePresetPreview();
    }, 50);
}

function hideUnifiedModal() {
    const modal = document.getElementById('unifiedModal');
    if (modal) modal.classList.remove('show');
}

function renderAllColumns() {
    renderColumn('identityColumn', 'Identity', selectedIdentity, 'selectIdentity');
    renderColumn('expertiseColumn', 'Expertise', selectedExpertise, 'selectExpertise');
    renderColumn('personalityColumn', 'Personality', selectedPersonality, 'selectPersonality');
    renderColumn('constraintsColumn', 'Constraints', selectedConstraints, 'selectConstraints');
    renderColumn('outputFormatColumn', 'Output Format', selectedOutputFormat, 'selectOutputFormat');
    renderColumn('taskFramingColumn', 'Task Framing', selectedTaskFraming, 'selectTaskFraming');
    renderColumn('contextHooksColumn', 'Context Hooks', selectedContextHooks, 'selectContextHooks');
}

// ✅ FIXED: renderColumn dengan auto-update preview + None option
function renderColumn(colId, cat, sel, func) {
    const col = document.getElementById(colId);
    const items = allPresets.filter(p => p.category === cat);
    col.innerHTML = '';
    
    // ✅ ADD: None option untuk setiap kolom
    const noneDiv = document.createElement('div');
    noneDiv.className = `column-item ${!sel ? 'selected' : ''}`;
    noneDiv.dataset.itemId = 'none';
    noneDiv.dataset.colId = colId;
    
    noneDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 6px; flex: 1; cursor: pointer;">
            <span style="font-size: 16px;">⚪</span>
            <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 600; font-size: 11px; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">None</div>
                <div style="font-size: 9px; color: #64748b;">No selection</div>
            </div>
        </div>
    `;
    
    noneDiv.addEventListener('click', function() {
        // Clear selection
        const varName = func.replace('select', 'selected');
        window[varName] = null;
        
        // Update visual
        document.querySelectorAll(`#${colId} .column-item`).forEach(el => {
            el.classList.remove('selected');
        });
        noneDiv.classList.add('selected');
        
        updatePresetPreview();
    });
    
    col.appendChild(noneDiv);
    
    // Add actual items
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = `column-item ${sel?.id === item.id ? 'selected' : ''}`;
        div.dataset.itemId = item.id;
        div.dataset.colId = colId;
        
        div.innerHTML = `
            <div style="display: flex; align-items: center; gap: 6px; flex: 1; cursor: pointer;">
                <span style="font-size: 16px;">${item.icon}</span>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-weight: 600; font-size: 11px; color: #f1f5f9; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.name}</div>
                    <div style="font-size: 9px; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.description}</div>
                </div>
            </div>
            ${!item.isDefault ? `
                <div class="column-item-actions" onclick="event.stopPropagation();">
                    <button onclick="deletePresetItem('${item.id}')"><i class="fas fa-trash"></i></button>
                </div>` : ''}
        `;
        
        // ✅ FIX: Add click handler yang langsung update preview
        div.addEventListener('click', function() {
            window[func](item.id, colId);
            updatePresetPreview(); // ✅ CRITICAL: Update preview setelah klik
        });
        
        col.appendChild(div);
    });
}

function selectIdentity(id, colId) { selectItem('selectedIdentity', id, colId); }
function selectExpertise(id, colId) { selectItem('selectedExpertise', id, colId); }
function selectPersonality(id, colId) { selectItem('selectedPersonality', id, colId); }
function selectConstraints(id, colId) { selectItem('selectedConstraints', id, colId); }
function selectOutputFormat(id, colId) { selectItem('selectedOutputFormat', id, colId); }
function selectTaskFraming(id, colId) { selectItem('selectedTaskFraming', id, colId); }
function selectContextHooks(id, colId) { selectItem('selectedContextHooks', id, colId); }

// ✅ FIXED: selectItem dengan auto-update preview
function selectItem(varName, id, colId) {
    const item = allPresets.find(p => p.id === id);
    if (!item) return;
    
    // ✅ Update variable global
    window[varName] = item;
    
    // ✅ Update visual - remove selected from all items in this column
    document.querySelectorAll(`#${colId} .column-item`).forEach(el => {
        el.classList.remove('selected');
    });
    
    // ✅ Add selected to clicked item
    const selectedEl = document.querySelector(`#${colId} .column-item[data-item-id="${id}"]`);
    if (selectedEl) {
        selectedEl.classList.add('selected');
    }
    
    // ✅ CRITICAL: Update preview setelah select
    updatePresetPreview();
}

function updatePresetPreview() {
    const preview = document.getElementById('presetPreview');
    
    // ✅ FIX: Debug logging
    console.log('Preview element:', preview);
    console.log('Selections:', {
        identity: selectedIdentity,
        expertise: selectedExpertise,
        personality: selectedPersonality,
        constraints: selectedConstraints,
        output: selectedOutputFormat,
        task: selectedTaskFraming,
        context: selectedContextHooks
    });
    
    if (!preview) {
        console.error('Preview element not found!');
        return;
    }
    
    const selections = [selectedIdentity, selectedExpertise, selectedPersonality, selectedConstraints, selectedOutputFormat, selectedTaskFraming, selectedContextHooks];
    
    // Check if nothing is selected
    if (selections.every(s => !s)) {
        preview.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #64748b;">
                <i class="fas fa-mouse-pointer" style="font-size: 32px; opacity: 0.5; margin-bottom: 12px; display: block;"></i>
                <p style="font-size: 13px; margin: 0; font-weight: 600;">Select items from columns above to build your AI agent</p>
                <p style="font-size: 11px; color: #475569; margin-top: 8px;">Choose Identity, Expertise, Personality, etc.</p>
            </div>
        `;
        console.log('Preview updated: empty state');
        return;
    }
    
    // Build combined prompt
    let prompt = '';
    let sections = [];
    
    if (selectedIdentity) {
        sections.push({ title: '🎭 IDENTITY', content: selectedIdentity.systemPrompt });
    }
    if (selectedExpertise) {
        sections.push({ title: '🧠 EXPERTISE', content: selectedExpertise.systemPrompt });
    }
    if (selectedPersonality) {
        sections.push({ title: '💬 PERSONALITY', content: selectedPersonality.systemPrompt });
    }
    if (selectedConstraints) {
        sections.push({ title: '🚫 CONSTRAINTS', content: selectedConstraints.systemPrompt });
    }
    if (selectedOutputFormat) {
        sections.push({ title: '📄 OUTPUT FORMAT', content: selectedOutputFormat.systemPrompt });
    }
    if (selectedTaskFraming) {
        sections.push({ title: '🎯 TASK APPROACH', content: selectedTaskFraming.systemPrompt });
    }
    if (selectedContextHooks) {
        sections.push({ title: '🔗 CONTEXT', content: selectedContextHooks.systemPrompt });
    }
    
    // Format dengan section headers
    prompt = sections.map(s => `${s.title}\n${s.content}`).join('\n\n---\n\n');
    
    preview.innerHTML = `
        <div class="preview-code" style="white-space: pre-wrap; word-wrap: break-word; line-height: 1.8; font-size: 11px; color: #cbd5e1; background: rgba(15, 23, 42, 0.8); padding: 16px; border-radius: 8px; border: 1px solid rgba(100, 116, 139, 0.3); max-height: 100%; overflow-y: auto;">${prompt.trim()}</div>
    `;
    
    console.log('Preview updated with', sections.length, 'sections');
    console.log('Preview HTML:', preview.innerHTML.substring(0, 200) + '...');
}

function applyFromUnifiedModal() {
    if (!selectedIdentity) {
        showToast('Select at least an Identity', 'warning');
        return;
    }
    
    let prompt = '', name = [];
    if (selectedIdentity) { prompt += selectedIdentity.systemPrompt + '\n\n'; name.push(selectedIdentity.name); }
    if (selectedExpertise) { prompt += selectedExpertise.systemPrompt + '\n\n'; name.push(selectedExpertise.name); }
    if (selectedPersonality) prompt += selectedPersonality.systemPrompt + '\n\n';
    if (selectedConstraints) prompt += selectedConstraints.systemPrompt + '\n\n';
    if (selectedOutputFormat) prompt += selectedOutputFormat.systemPrompt + '\n\n';
    if (selectedTaskFraming) prompt += selectedTaskFraming.systemPrompt + '\n\n';
    if (selectedContextHooks) prompt += selectedContextHooks.systemPrompt;
    
    selectedPreset = { id: 'combined_' + Date.now(), name: name.join(' + '), icon: selectedIdentity.icon, systemPrompt: prompt.trim(), category: 'Combined' };
    updateCurrentPreset();
    hideUnifiedModal();
    showToast('AI Agent applied!', 'success');
}

function showAddPresetDialog(cat) {
    const overlay = document.createElement('div');
    overlay.className = 'custom-prompt-overlay';
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); z-index: 10002; display: flex; align-items: center; justify-content: center;';
    
    overlay.innerHTML = `
        <div style="background: #0f172a; border: 1px solid rgba(100,116,139,0.5); border-radius: 16px; padding: 24px; max-width: 500px; width: 90%;">
            <div style="font-size: 18px; font-weight: 700; color: #f1f5f9; margin-bottom: 16px;">Add ${cat}</div>
            <div style="margin-bottom: 12px;">
                <label style="display: block; font-size: 12px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">Name</label>
                <input type="text" id="presetNameInput" placeholder="Name" style="width: 100%; padding: 10px; background: rgba(30,41,59,0.5); border: 1px solid rgba(100,116,139,0.5); border-radius: 8px; color: #f1f5f9;">
            </div>
            <div style="margin-bottom: 12px;">
                <label style="display: block; font-size: 12px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">Description</label>
                <input type="text" id="presetDescInput" placeholder="Description" style="width: 100%; padding: 10px; background: rgba(30,41,59,0.5); border: 1px solid rgba(100,116,139,0.5); border-radius: 8px; color: #f1f5f9;">
            </div>
            <div style="margin-bottom: 16px;">
                <label style="display: block; font-size: 12px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">Prompt</label>
                <textarea id="presetPromptInput" rows="5" placeholder="System prompt..." style="width: 100%; padding: 10px; background: rgba(30,41,59,0.5); border: 1px solid rgba(100,116,139,0.5); border-radius: 8px; color: #f1f5f9; resize: vertical;"></textarea>
            </div>
            <div style="display: flex; gap: 10px;">
                <button onclick="this.closest('.custom-prompt-overlay').remove()" style="flex: 1; padding: 10px; background: rgba(100,116,139,0.2); border: 1px solid rgba(100,116,139,0.5); color: #cbd5e1; border-radius: 8px; cursor: pointer;">Cancel</button>
                <button onclick="saveCustomPreset('${cat}')" style="flex: 1; padding: 10px; background: linear-gradient(to right, #22c55e, #16a34a); color: white; border: none; border-radius: 8px; cursor: pointer;">Create</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
}

function saveCustomPreset(cat) {
    const name = document.getElementById('presetNameInput').value.trim();
    const desc = document.getElementById('presetDescInput').value.trim();
    const prompt = document.getElementById('presetPromptInput').value.trim();
    
    if (!name || !prompt) {
        showToast('Name and prompt required', 'warning');
        return;
    }
    
    allPresets.push({ id: `custom_${Date.now()}`, name, icon: '⭐', description: desc || 'Custom', systemPrompt: prompt, isDefault: false, category: cat });
    saveCustomPresets();
    document.querySelector('.custom-prompt-overlay').remove();
    renderAllColumns();
    showToast(`${cat} added!`, 'success');
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