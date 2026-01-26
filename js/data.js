// 7-COLUMN AI AGENT BUILDER SYSTEM
const defaultPresets = [
    // ========== 1. IDENTITY ==========
    { id: 'id_analyst', name: 'Data Analyst', icon: '📊', description: 'Statistical expert', systemPrompt: 'You are a senior data analyst with expertise in statistics and visualization.', isDefault: true, category: 'Identity' },
    { id: 'id_researcher', name: 'Researcher', icon: '🔬', description: 'Academic scientist', systemPrompt: 'You are a research scientist skilled in methodology and analysis.', isDefault: true, category: 'Identity' },
    { id: 'id_consultant', name: 'Consultant', icon: '💼', description: 'Business advisor', systemPrompt: 'You are a strategic business consultant from a top firm.', isDefault: true, category: 'Identity' },
    { id: 'id_teacher', name: 'Educator', icon: '🎓', description: 'Expert teacher', systemPrompt: 'You are an experienced educator who explains concepts clearly.', isDefault: true, category: 'Identity' },
    { id: 'id_engineer', name: 'Engineer', icon: '⚙️', description: 'Technical architect', systemPrompt: 'You are a principal engineer with system design expertise.', isDefault: true, category: 'Identity' },
    
    // ========== 2. EXPERTISE ==========
    { id: 'exp_stats', name: 'Statistics', icon: '📈', description: 'Statistical analysis', systemPrompt: 'EXPERTISE: Statistical analysis, hypothesis testing, regression, ANOVA, time series.', isDefault: true, category: 'Expertise' },
    { id: 'exp_finance', name: 'Finance', icon: '💰', description: 'Financial analysis', systemPrompt: 'EXPERTISE: Financial modeling, valuation (DCF, comparables), risk assessment.', isDefault: true, category: 'Expertise' },
    { id: 'exp_marketing', name: 'Marketing', icon: '📢', description: 'Marketing strategy', systemPrompt: 'EXPERTISE: Market segmentation, digital marketing, brand strategy, SEO.', isDefault: true, category: 'Expertise' },
    { id: 'exp_legal', name: 'Legal', icon: '⚖️', description: 'Legal analysis', systemPrompt: 'EXPERTISE: Contract law, compliance, risk assessment, legal precedents.', isDefault: true, category: 'Expertise' },
    { id: 'exp_research', name: 'Research Methods', icon: '🔍', description: 'Scientific methodology', systemPrompt: 'EXPERTISE: Research design, qualitative/quantitative methods, literature review.', isDefault: true, category: 'Expertise' },
    
    // ========== 3. PERSONALITY ==========
    { id: 'pers_formal', name: 'Professional', icon: '🎩', description: 'Formal business tone', systemPrompt: 'PERSONALITY: Communicate professionally with formal business language.', isDefault: true, category: 'Personality' },
    { id: 'pers_friendly', name: 'Friendly', icon: '😊', description: 'Warm & approachable', systemPrompt: 'PERSONALITY: Be warm, friendly, and encouraging in communication.', isDefault: true, category: 'Personality' },
    { id: 'pers_direct', name: 'Direct', icon: '⚡', description: 'Straight to point', systemPrompt: 'PERSONALITY: Be extremely direct and concise. No fluff.', isDefault: true, category: 'Personality' },
    { id: 'pers_socratic', name: 'Socratic', icon: '🤔', description: 'Question-driven', systemPrompt: 'PERSONALITY: Use Socratic method - guide through probing questions.', isDefault: true, category: 'Personality' },
    { id: 'pers_motivate', name: 'Enthusiastic', icon: '🌟', description: 'Energetic & inspiring', systemPrompt: 'PERSONALITY: Show enthusiasm and motivate with positive energy.', isDefault: true, category: 'Personality' },
    
    // ========== 4. CONSTRAINTS ==========
    { id: 'const_facts', name: 'Facts Only', icon: '🚫', description: 'No speculation', systemPrompt: 'CONSTRAINT: Never speculate. Only state what is directly supported by evidence.', isDefault: true, category: 'Constraints' },
    { id: 'const_cite', name: 'Cite Sources', icon: '📚', description: 'Require citations', systemPrompt: 'CONSTRAINT: Every claim must cite sources using [Source: ...] notation.', isDefault: true, category: 'Constraints' },
    { id: 'const_brief', name: 'Word Limit', icon: '📏', description: 'Max 200 words', systemPrompt: 'CONSTRAINT: Keep responses under 200 words. Be ruthlessly concise.', isDefault: true, category: 'Constraints' },
    { id: 'const_simple', name: 'No Jargon', icon: '👶', description: 'Beginner-friendly', systemPrompt: 'CONSTRAINT: Avoid jargon. Explain technical terms in plain language.', isDefault: true, category: 'Constraints' },
    { id: 'const_neutral', name: 'Neutral', icon: '⚖️', description: 'No bias', systemPrompt: 'CONSTRAINT: Maintain strict neutrality. Present multiple perspectives fairly.', isDefault: true, category: 'Constraints' },
    
    // ========== 5. OUTPUT FORMAT ==========
    { id: 'fmt_exec', name: 'Executive Summary', icon: '📋', description: 'TL;DR first', systemPrompt: 'FORMAT: Start with 2-3 sentence executive summary, then details.', isDefault: true, category: 'Output Format' },
    { id: 'fmt_bullets', name: 'Bullet Lists', icon: '•', description: 'Structured bullets', systemPrompt: 'FORMAT: Use hierarchical bullet points. • main ◦ sub ▪ details.', isDefault: true, category: 'Output Format' },
    { id: 'fmt_steps', name: 'Numbered Steps', icon: '🔢', description: 'Sequential guide', systemPrompt: 'FORMAT: Present as numbered steps with substeps (1.1, 1.2).', isDefault: true, category: 'Output Format' },
    { id: 'fmt_table', name: 'Comparison Table', icon: '📊', description: 'Side-by-side', systemPrompt: 'FORMAT: Use markdown table comparing options with pros/cons.', isDefault: true, category: 'Output Format' },
    { id: 'fmt_qa', name: 'Q&A Format', icon: '❓', description: 'Question-Answer', systemPrompt: 'FORMAT: Structure as Q&A pairs. **Q:** ... **A:** ...', isDefault: true, category: 'Output Format' },
    
    // ========== 6. TASK FRAMING ==========
    { id: 'task_solve', name: 'Problem-Solution', icon: '🔧', description: 'Solve problems', systemPrompt: 'APPROACH: (1) Define problem (2) Root causes (3) Solutions (4) Evaluate (5) Recommend.', isDefault: true, category: 'Task Framing' },
    { id: 'task_analyze', name: 'Analysis', icon: '🔬', description: 'Deep analysis', systemPrompt: 'APPROACH: Decompose → Examine → Find patterns → Synthesize insights.', isDefault: true, category: 'Task Framing' },
    { id: 'task_teach', name: 'Teaching', icon: '📚', description: 'Educate & explain', systemPrompt: 'APPROACH: Start with fundamentals → Build complexity → Use examples → Check understanding.', isDefault: true, category: 'Task Framing' },
    { id: 'task_decide', name: 'Decision Framework', icon: '🎯', description: 'Help decide', systemPrompt: 'APPROACH: Clarify goals → Identify options → Set criteria → Compare → Account for risk.', isDefault: true, category: 'Task Framing' },
    { id: 'task_creative', name: 'Creative Ideation', icon: '💡', description: 'Generate ideas', systemPrompt: 'APPROACH: Suspend judgment → Generate diverse options → Think laterally → Refine ideas.', isDefault: true, category: 'Task Framing' },
    
    // ========== 7. CONTEXT HOOKS ==========
    { id: 'ctx_doc', name: 'Document Context', icon: '📄', description: 'Analyze documents', systemPrompt: 'CONTEXT: {{DOCUMENT_CONTENT}} - Reference specific sections and quotes.', isDefault: true, category: 'Context Hooks' },
    { id: 'ctx_conv', name: 'Conversation History', icon: '💬', description: 'Prior messages', systemPrompt: 'CONTEXT: {{CONVERSATION_HISTORY}} - Build upon previous discussion.', isDefault: true, category: 'Context Hooks' },
    { id: 'ctx_user', name: 'User Profile', icon: '👤', description: 'User background', systemPrompt: 'CONTEXT: {{USER_ROLE}}, {{USER_EXPERTISE}} - Tailor to user background.', isDefault: true, category: 'Context Hooks' },
    { id: 'ctx_time', name: 'Time-Sensitive', icon: '⏰', description: 'Deadlines', systemPrompt: 'CONTEXT: {{CURRENT_DATE}}, {{DEADLINE}} - Factor in time constraints.', isDefault: true, category: 'Context Hooks' },
    { id: 'ctx_data', name: 'Data-Driven', icon: '📊', description: 'Dataset context', systemPrompt: 'CONTEXT: {{DATA_SUMMARY}} - Base analysis on provided data.', isDefault: true, category: 'Context Hooks' }
];

const models = [
    { id: 'claude-sonnet', name: 'Claude Sonnet 4.5', provider: 'Anthropic', icon: '🟣' },
    { id: 'gpt4', name: 'GPT-4 Turbo', provider: 'OpenAI', icon: '🟢' },
    { id: 'gemini', name: 'Gemini Pro', provider: 'Google', icon: '🔵' },
    { id: 'llama', name: 'Llama 3.1', provider: 'Meta', icon: '🟠' },
    { id: 'mistral', name: 'Mistral Large', provider: 'Mistral AI', icon: '🔴' }
];

const emojis = ['📊', '🔬', '✏️', '📝', '💼', '⚖️', '🎯', '💡', '📈', '📉', '📍', '🔎', '📋', '📌', '📄', '🎨', '🧪', '🧬', '🎓', '📚'];
const categories = ['Identity', 'Expertise', 'Personality', 'Constraints', 'Output Format', 'Task Framing', 'Context Hooks', 'Custom'];

// ✅ CRITICAL FIX: Initialize global variables properly
let allPresets = [];
let selectedIdentity = null;
let selectedExpertise = null;
let selectedPersonality = null;
let selectedConstraints = null;
let selectedOutputFormat = null;
let selectedTaskFraming = null;
let selectedContextHooks = null;
let selectedPreset = null;
let selectedModel = 'claude-sonnet';
let secondModel = 'gpt4';
let messages = [];
let compareMode = false;
let tokenUsage = { input: 0, output: 0, total: 0 };

function loadAllPresets() {
    console.log('📦 Loading all presets...');
    
    const saved = localStorage.getItem('customPresets');
    let customPresets = [];
    if (saved) {
        try { 
            customPresets = JSON.parse(saved);
            console.log('✅ Loaded', customPresets.length, 'custom presets from localStorage');
        } catch (e) { 
            console.error('❌ Error parsing custom presets:', e);
            customPresets = []; 
        }
    }
    
    allPresets = [...defaultPresets, ...customPresets];
    console.log('✅ Total presets loaded:', allPresets.length);
    console.log('   - Default:', defaultPresets.length);
    console.log('   - Custom:', customPresets.length);
    
    // ✅ DEBUG: Log preset distribution
    categories.forEach(cat => {
        const count = allPresets.filter(p => p.category === cat).length;
        console.log(`   - ${cat}: ${count} items`);
    });
    
    // ✅ Set default selection if none
    if (!selectedIdentity && allPresets.length > 0) {
        selectedIdentity = allPresets.find(p => p.category === 'Identity') || null;
        console.log('✅ Default Identity set:', selectedIdentity?.name);
    }
}

function saveCustomPresets() {
    const customOnly = allPresets.filter(p => !p.isDefault);
    localStorage.setItem('customPresets', JSON.stringify(customOnly));
    console.log('💾 Saved', customOnly.length, 'custom presets');
}

function updateCurrentPreset() {
    console.log('🔄 Updating current preset display...');
    
    const presetEl = document.getElementById('currentPreset');
    const iconEl = document.getElementById('presetIcon');
    
    if (!presetEl || !iconEl) {
        console.error('❌ Preset display elements not found!');
        return;
    }
    
    if (selectedIdentity) {
        presetEl.textContent = selectedIdentity.name;
        iconEl.textContent = selectedIdentity.icon;
        console.log('✅ Display updated:', selectedIdentity.name);
    } else {
        presetEl.textContent = 'No Preset';
        iconEl.textContent = '💬';
        console.log('⚠️ No preset selected');
    }
}