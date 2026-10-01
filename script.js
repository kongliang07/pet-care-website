// ===== 宠物数据（狗狗 + 猫咪）=====
const petDetails = {
    // ===== 狗狗信息 =====
    '阿布': {
        name: '阿布',
        age: '2岁',
        breed: '金毛犬',
        gender: '公狗',
        description: '温柔美人，勇敢与温柔兼并，非常适合有孩子的家庭。阿布非常友好，喜欢和人互动，是最佳的伴侣犬。',
        details: [
            '性格：温柔、友好、充满活力',
            '健康状况：已接种疫苗，已绝育',
            '特别需求：需要定期运动和散步',
            '适合：有院子或大空间的家庭'
        ]
    },
    '小七': {
        name: '小七',
        age: '1岁',
        breed: '威尔士柯基',
        gender: '女孩',
        description: '活泼聪慧的小姐姐，喜欢和人互动，是理想的家庭伴侣。小七很容易相处。',
        details: [
            '性格：活泼、聪慧、友好',
            '健康状况：已接种疫苗，已绝育',
            '特别需求：需要定期运动',
            '适合：家庭或公寓'
        ]
    },
    '团团': {
        name: '团团',
        age: '3岁',
        breed: '波美拉尼亚犬',
        gender: '公狗',
        description: '温柔可爱的小家伙，喜欢被抚摸和陪伴。是完美的小伴侣。',
        details: [
            '性格：温柔、可爱、亲切',
            '健康状况：已接种疫苗，已绝育',
            '特别需求：需要温柔的对待',
            '适合：各种家庭环境'
        ]
    },
    '豆豆': {
        name: '豆豆',
        age: '2岁',
        breed: '比格犬',
        gender: '公狗',
        description: '聪慧聪敏，喜欢运动，最适合活跃的家庭。豆豆非常听话，易于训练。',
        details: [
            '性格：聪慧、活跃、忠诚',
            '健康状况：已接种疫苗，已绝育',
            '特别需求：需要大量运动',
            '适合：活跃的家庭或运动爱好者'
        ]
    },
    '雪儿': {
        name: '雪儿',
        age: '2岁',
        breed: '西伯利亚哈士奇',
        gender: '女孩',
        description: '活力满满，忠诚友好的雪儿。需要有耐心和充分时间照顾的主人。',
        details: [
            '性格：活力、忠诚、友好',
            '健康状况：已接种疫苗，已绝育',
            '特别需求：需要充足的运动和空间',
            '适合：有经验的爱犬人士'
        ]
    },
    
    // ===== 猫咪信息 =====
    '小橙': {
        name: '小橙',
        age: '1岁',
        breed: '橙色虎纹猫',
        gender: '公猫',
        description: '活泼好动，充满好奇心，喜欢和人玩耍。小橙是个小淘气鬼，总是充满了对世界的好奇。',
        details: [
            '性格：活泼、好奇、调皮',
            '健康状况：已接种疫苗，已绝育',
            '特别需求：需要充足的玩耍时间和玩具',
            '适合：活跃的家庭或年轻人'
        ]
    },
    '灰灰': {
        name: '灰灰',
        age: '2岁',
        breed: '灰白色猫',
        gender: '女猫',
        description: '温柔乖巧，喜欢被抚摸，是个贴心的小伙伴。灰灰很安静，很适合陪伴。',
        details: [
            '性格：温柔、乖巧、贴心',
            '健康状况：已接种疫苗，已绝育',
            '特别需求：喜欢安静的环境和温柔的陪伴',
            '适合：安静的家庭或单身人士'
        ]
    },
    '白白': {
        name: '白白',
        age: '2岁',
        breed: '白色长毛猫',
        gender: '女猫',
        description: '优雅迷人，蓝眼睛闪闪发光，气质高贵。白白是个优雅的小淑女。',
        details: [
            '性格：优雅、高贵、温柔',
            '健康状况：已接种疫苗，已绝育',
            '特别需求：需要定期梳理毛发',
            '适合：爱干净、有耐心的家庭'
        ]
    },
    '虎虎': {
        name: '虎虎',
        age: '3个月',
        breed: '虎纹小猫',
        gender: '公猫',
        description: '调皮可爱的小家伙，充满童真和活力。虎虎是个小精灵，喜欢蹦蹦跳跳。',
        details: [
            '性格：调皮、活泼、可爱',
            '健康状况：已接种疫苗',
            '特别需求：需要耐心教导和大量玩耍',
            '适合：有耐心且喜欢互动的家庭'
        ]
    },
    '雪花': {
        name: '雪花',
        age: '1岁',
        breed: '白色柔软猫',
        gender: '女猫',
        description: '温暖治愈，喜欢依靠在主人身边撒娇。雪花是个小暖宝宝，充满了爱。',
        details: [
            '性格：温暖、黏人、治愈',
            '健康状况：已接种疫苗，已绝育',
            '特别需求：需要充足的陪伴和关爱',
            '适合：喜欢亲密陪伴的家庭'
        ]
    }
};

// ===== 详情内容 =====
const detailsContent = {
    'story': {
        icon: '📖',
        title: '了解我们的故事',
        content: `<p><strong>PET CARE</strong> 成立于2019年，是一个致力于救助流浪动物的非营利组织。</p><h4 style="color: #FF9EC9; margin-top: 15px;">我们的使命</h4><p>我们相信每一个生命都值得被尊重和爱护。无论是流浪的狗狗还是猫咪，它们都应该拥有一个温暖的家，得到适当的医疗护理和关爱。</p><h4 style="color: #FF9EC9; margin-top: 15px;">我们的故事</h4><p>从一个小小的初心开始，到现在我们已经成功救援了380多只流浪动物，为520多只需要帮助的小生命提供了援助。这些成果离不开我们团队的努力和社会各界的支持。</p><h4 style="color: #FF9EC9; margin-top: 15px;">我们的愿景</h4><p>在未来，我们希望能够帮助更多的流浪动物，建立更多的救助中心，让每一个无家可归的小生命都能找到属于自己的家庭。我们邀请你加入我们，一起为生命发声。</p>`
    },
    'adoption': {
        icon: '❤️',
        title: '爱心领养',
        content: `<p>我们致力于为流浪动物找到一个充满爱的家。我们的领养流程透明、严谨，确保每一个小生命都能找到最适合的主人。</p><h4 style="color: #FF9EC9; margin-top: 15px;">领养步骤</h4><ul><li>💌 <strong>提交申请：</strong> 选择你喜欢的宠物，填写领养申请表</li><li>✅ <strong>审核评估：</strong> 我们会评估你的生活环境和照顾能力</li><li>💬 <strong>沟通交流：</strong> 面对面沟通了解宠物的性格和你的期望</li><li>🐾 <strong>签署协议：</strong> 签署领养协议，承诺终身照顾</li><li>🏡 <strong>接回家庭：</strong> 将你的新伙伴接回温暖的家</li></ul><h4 style="color: #FF9EC9; margin-top: 15px;">领养协议承诺</h4><p>✓ 提供安全舒适的生活环境<br>✓ 定期进行医疗检查和疫苗接种<br>✓ 提供充足的食物和饮用水<br>✓ 给予足够的爱心和陪伴<br>✓ 终身照顾，不遗弃</p>`
    },
    'medical': {
        icon: '🏥',
        title: '医疗救助',
        content: `<p>我们与120多家医疗机构合作，为流浪动物提供全面的医疗救助和健康护理。</p><h4 style="color: #FF9EC9; margin-top: 15px;">医疗服务包括</h4><ul><li>🩺 <strong>初步检查：</strong> 对所有救助的动物进行全面的健康检查</li><li>💉 <strong>疫苗接种：</strong> 接种必要的疫苗，预防传染病</li><li>🔬 <strong>化验检测：</strong> 进行血液检查等必要的医学检测</li><li>🏥 <strong>专业治疗：</strong> 对生病和受伤的动物进行医学治疗</li><li>✂️ <strong>绝育手术：</strong> 进行绝育手术，控制流浪动物数量</li><li>🦷 <strong>牙齿护理：</strong> 专业的口腔护理和治疗</li></ul><h4 style="color: #FF9EC9; margin-top: 15px;">我们的承诺</h4><p>每一个受救的生命都会得到最好的医疗照顾，直到他们找到自己的家。我们与兽医合作，确保最高的医疗标准。</p>`
    },
    'shelter': {
        icon: '🏠',
        title: '安全庇护',
        content: `<p>我们为无家可归的流浪动物提供安全、温暖的临时庇护所，给它们一个休息和康复的地方。</p><h4 style="color: #FF9EC9; margin-top: 15px;">庇护所设施</h4><ul><li>🛏️ <strong>舒适的睡眠区：</strong> 温暖的床垫和毛毯</li><li>🍖 <strong>营养膳食：</strong> 高质量的狗粮和猫粮</li><li>🚿 <strong>卫生设施：</strong> 定期清洁和消毒</li><li>🎾 <strong>活动空间：</strong> 安全的活动区域让宠物运动</li><li>👨‍⚕️ <strong>24小时照顾：</strong> 全天候的工作人员护理</li><li>❤️ <strong>心理陪伴：</strong> 志愿者提供爱心陪伴和社交</li></ul><h4 style="color: #FF9EC9; margin-top: 15px;">在庇护所的生活</h4><p>每一个动物在庇护所里都会得到平等的照顾和尊重。我们希望在这里，他们能够恢复健康，重新获得对生活的信心，等待属于他们的爱心家庭。</p>`
    },
    'volunteer': {
        icon: '👥',
        title: '志愿者团队',
        content: `<p>我们的200+名志愿者是PET CARE的心脏。他们用热心和爱心，每天为流浪动物服务。</p><h4 style="color: #FF9EC9; margin-top: 15px;">志愿者的工作</h4><ul><li>🐾 <strong>日常护理：</strong> 喂食、清洁、陪伴动物</li><li>🚗 <strong>救援外出：</strong> 参与救助流浪动物的行动</li><li>📢 <strong>宣传推广：</strong> 传播动物保护的理念</li><li>👨‍👩‍👧‍👦 <strong>家庭寄养：</strong> 在家中为动物提供临时照顾</li><li>💰 <strong>筹款活动：</strong> 组织活动筹集救助经费</li><li>📱 <strong>社交媒体：</strong> 帮助分享救援故事和寻找主人</li></ul><h4 style="color: #FF9EC9; margin-top: 15px;">加入我们</h4><p>如果你热爱动物，想要做出改变，欢迎加入我们的志愿者团队。无论你有多少时间或经验，我们都欢迎你！点击下面的"加入志愿者"按钮了解更多信息。</p>`
    }
};

// ===== 页面加载时 =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐱 PET CARE 宠物救助网站加载完成！');
    initScrollToTopButton();
});

// ===== 初始化返回顶部按钮 =====
function initScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '🚀';
    scrollBtn.title = '返回顶部';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== 平滑滚动 =====
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== 心形按钮切换 =====
function toggleHeart(button) {
    button.classList.toggle('liked');
    const petName = button.closest('.pet-card').querySelector('.pet-name').textContent;
    
    if (button.classList.contains('liked')) {
        button.textContent = '❤️';
        showToast(`已收藏 ${petName}！`);
    } else {
        button.textContent = '🤍';
        showToast(`已取消收藏 ${petName}！`);
    }
}

// ===== 显示宠物详情模态框 =====
function showPetDetails(petName) {
    const pet = petDetails[petName];
    const modal = document.getElementById('petModal');
    const modalBody = document.getElementById('modalBody');

    let detailsHTML = `
        <div style="text-align: center;">
            <h3 style="color: #FF9EC9; font-size: 24px; margin: 0 0 15px 0;">🐾 ${pet.name}</h3>
            <p style="margin: 5px 0; color: #999;"><strong>年龄：</strong> ${pet.age}</p>
            <p style="margin: 5px 0; color: #999;"><strong>品种：</strong> ${pet.breed}</p>
            <p style="margin: 5px 0 15px 0; color: #999;"><strong>性别：</strong> ${pet.gender}</p>
            <p style="margin: 15px 0; line-height: 1.7; color: #666; font-size: 15px;">${pet.description}</p>
            <h4 style="margin-top: 20px; color: #FF9EC9; font-size: 16px;">📋 详细信息</h4>
            <div style="text-align: center; margin: 15px 0;">`;

    pet.details.forEach(detail => {
        detailsHTML += `<p style="margin: 8px auto; color: #666; font-size: 14px;">✓ ${detail}</p>`;
    });

    detailsHTML += `</div><div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
        <button class="btn btn-secondary" onclick="closePetModal()" style="min-width: 100px;">关闭</button>
    </div></div>`;

    modalBody.innerHTML = detailsHTML;
    modal.classList.add('show');
}

// ===== 关闭宠物模态框 =====
function closePetModal() {
    const modal = document.getElementById('petModal');
    modal.classList.remove('show');
}

// ===== 显示详情页面 =====
function showDetails(type) {
    const details = detailsContent[type];
    const modal = document.getElementById('detailsModal');
    const detailsBody = document.getElementById('detailsBody');

    if (!details) return;

    let html = `<h3>${details.icon} ${details.title}</h3>`;
    html += details.content;

    detailsBody.innerHTML = html;
    modal.classList.add('show');
}

// ===== 关闭详情模态框 =====
function closeDetailsModal() {
    const modal = document.getElementById('detailsModal');
    modal.classList.remove('show');
}

// ===== 点击模态框外部关闭 =====
window.onclick = function(event) {
    const petModal = document.getElementById('petModal');
    const detailsModal = document.getElementById('detailsModal');
    const donateModal = document.getElementById('donateModal');
    const volunteerModal = document.getElementById('volunteerModal');
    const searchModal = document.getElementById('searchModal');
    
    if (event.target === petModal) {
        closePetModal();
    }
    if (event.target === detailsModal) {
        closeDetailsModal();
    }
    if (event.target === donateModal) {
        closeDonateForm();
    }
    if (event.target === volunteerModal) {
        closeVolunteerForm();
    }
    if (event.target === searchModal) {
        closeSearchForm();
    }
}

// ===== 显示提示消息 =====
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// ===== 搜索功能 =====
function handleSearch() {
    const modal = document.getElementById('searchModal');
    modal.classList.add('show');
    document.getElementById('searchInput').focus();
}

function closeSearchForm() {
    const modal = document.getElementById('searchModal');
    modal.classList.remove('show');
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchInput').value = '';
}

function submitSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const found = Object.keys(petDetails).filter(name =>
        name.toLowerCase().includes(searchTerm) || 
        petDetails[name].breed.toLowerCase().includes(searchTerm)
    );

    const resultsDiv = document.getElementById('searchResults');
    const resultsList = document.getElementById('searchResultsList');

    if (found.length > 0) {
        let html = '';
        found.forEach(name => {
            html += `<div class="search-result-item" onclick="showPetDetails('${name}'); closeSearchForm();">
                <strong>${name}</strong> - ${petDetails[name].breed}
            </div>`;
        });
        resultsList.innerHTML = html;
        resultsDiv.style.display = 'block';
        showToast(`找到 ${found.length} 个匹配的宠物`);
    } else {
        resultsList.innerHTML = '<p style="color: #999;">未找到匹配的宠物</p>';
        resultsDiv.style.display = 'block';
        showToast('未找到匹配的宠物');
    }
}

// ===== 捐款功能 =====
function handleDonate() {
    const modal = document.getElementById('donateModal');
    modal.classList.add('show');
    document.getElementById('donateAmount').focus();
}

function closeDonateForm() {
    const modal = document.getElementById('donateModal');
    modal.classList.remove('show');
    document.getElementById('donateFormContent').reset();
}

function submitDonate(event) {
    event.preventDefault();
    const amount = document.getElementById('donateAmount').value;
    const name = document.getElementById('donatorName').value || '爱心人士';
    const isAnonymous = document.getElementById('donateAnonymous').checked;

    showToast(`💖 感谢${isAnonymous ? '您' : name}的 ¥${amount} 捐助！`);
    console.log(`捐助信息 - 金额: ¥${amount}, 名字: ${name}, 匿名: ${isAnonymous}`);
    closeDonateForm();
}

// ===== 志愿者功能 =====
function handleVolunteer() {
    const modal = document.getElementById('volunteerModal');
    modal.classList.add('show');
    document.getElementById('volunteerName').focus();
}

function closeVolunteerForm() {
    const modal = document.getElementById('volunteerModal');
    modal.classList.remove('show');
    document.getElementById('volunteerFormContent').reset();
}

function submitVolunteer(event) {
    event.preventDefault();
    const name = document.getElementById('volunteerName').value;
    const email = document.getElementById('volunteerEmail').value;
    const phone = document.getElementById('volunteerPhone').value;
    const type = document.getElementById('volunteerType').value;

    showToast(`感谢 ${name} 的志愿者申请！我们会尽快与您联系。`);
    console.log(`志愿者申请 - 名字: ${name}, 邮箱: ${email}, 电话: ${phone}, 类型: ${type}`);
    closeVolunteerForm();
}

// ===== 领养功能 =====
function handleAdopt(petName) {
    const confirmMsg = `您确定要领养 ${petName} 吗？\n\n领养协议：\n✓ 承诺终身照顾\n✓ 提供适当的医疗护理\n✓ 给予充足的爱和关注\n\n我们会与您联系进行进一步的评估。`;
    
    if (confirm(confirmMsg)) {
        showToast(`感谢您选择领养 ${petName}！我们会很快与您联系。`);
        closePetModal();
        console.log(`已申请领养：${petName}`);
    }
}

// ===== 分享功能 =====
function handleShare() {
    const shareText = '我刚才发现了一个很棒的宠物救助网站 🐾 PET CARE。帮助流浪宠物找到温暖的家。您也可以访问网站了解更多信息！';
    
    if (navigator.share) {
        navigator.share({
            title: 'PET CARE - 宠物救助中心',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('分享被取消'));
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('分享文本已复制到剪贴板！');
    }
}

// ===== 平滑滚动链接 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            smoothScroll(href);
        }
    });
});

// ===== 导航栏粘性效果 =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

console.log('✨ PET CARE 宠物救助网站脚本加载完成！');

// ===== 捐款1（我要捐助）金额选择 =====
function setDonateAmount(amount) {
    document.getElementById('donateAmount').value = amount;
    // 高亮按钮
    document.querySelectorAll('#donateFormContent .amount-btn').forEach(btn => {
        btn.style.background = 'white';
        btn.style.color = '#FF9EC9';
        btn.style.borderColor = '#FFE8F5';
    });
    event.target.style.background = 'linear-gradient(135deg, #FFB6D9 0%, #FF9EC9 100%)';
    event.target.style.color = 'white';
    event.target.style.borderColor = '#FF9EC9';
}

function closeDonateForm() {
    const modal = document.getElementById('donateModal');
    modal.classList.remove('show');
    document.getElementById('donateFormContent').reset();
}

function submitDonate(event) {
    event.preventDefault();
    const amount = document.getElementById('donateAmount').value || prompt('请输入捐助金额');
    if (!amount) return;
    
    const name = document.getElementById('donatorName').value || '爱心人士';
    const email = document.getElementById('donatorEmail').value;
    const phone = document.getElementById('donatorPhone').value;

    showToast(`❤️ 感谢${name}的 ¥${amount} 捐助！`);
    console.log(`捐助 - 金额: ¥${amount}, 名字: ${name}, 邮箱: ${email}, 电话: ${phone}`);
    closeDonateForm();
}

// ===== 捐款2（现在捐助）金额选择 =====
function setDonateAmount2(amount) {
    document.getElementById('donateAmount2').value = amount;
    document.querySelectorAll('#donateFormContent2 .amount-btn').forEach(btn => {
        btn.style.background = 'white';
        btn.style.color = '#FF9EC9';
        btn.style.borderColor = '#FFE8F5';
    });
    event.target.style.background = 'linear-gradient(135deg, #FFB6D9 0%, #FF9EC9 100%)';
    event.target.style.color = 'white';
    event.target.style.borderColor = '#FF9EC9';
}

function handleDonate2() {
    const modal = document.getElementById('donateModal2');
    modal.classList.add('show');
    document.getElementById('donateAmount2').focus();
}

function closeDonateForm2() {
    const modal = document.getElementById('donateModal2');
    modal.classList.remove('show');
    document.getElementById('donateFormContent2').reset();
}

function submitDonate2(event) {
    event.preventDefault();
    const amount = document.getElementById('donateAmount2').value || prompt('请输入捐助金额');
    if (!amount) return;
    
    const name = document.getElementById('donatorName2').value || '爱心人士';
    const email = document.getElementById('donatorEmail2').value;
    const phone = document.getElementById('donatorPhone2').value;

    showToast(`💝 感谢${name}的 ¥${amount} 捐助！`);
    console.log(`捐助 - 金额: ¥${amount}, 名字: ${name}, 邮箱: ${email}, 电话: ${phone}`);
    closeDonateForm2();
}

// ===== 关闭志愿者表单 =====
function closeVolunteerForm() {
    const modal = document.getElementById('volunteerModal');
    modal.classList.remove('show');
    document.getElementById('volunteerFormContent').reset();
}

function submitVolunteer(event) {
    event.preventDefault();
    const name = document.getElementById('volunteerName').value;
    const email = document.getElementById('volunteerEmail').value;
    const phone = document.getElementById('volunteerPhone').value;
    const age = document.getElementById('volunteerAge').value;
    const city = document.getElementById('volunteerCity').value;
    const type = document.getElementById('volunteerType').value;
    const hours = document.getElementById('volunteerHours').value;
    const reason = document.getElementById('volunteerReason').value;

    showToast(`感谢 ${name} 的志愿者申请！我们会尽快与您联系。`);
    console.log(`志愿者申请 - 名字: ${name}, 邮箱: ${email}, 电话: ${phone}, 年龄: ${age}, 城市: ${city}, 活动: ${type}, 时间: ${hours}, 原因: ${reason}`);
    closeVolunteerForm();
}

// ===== 领养表单 =====
function showAdoptForm(petName) {
    const modal = document.getElementById('adoptModal');
    document.getElementById('adoptPetName').textContent = petName;
    modal.classList.add('show');
    document.getElementById('adoptName').focus();
}

function closeAdoptForm() {
    const modal = document.getElementById('adoptModal');
    modal.classList.remove('show');
    document.getElementById('adoptFormContent').reset();
}

function submitAdopt(event) {
    event.preventDefault();
    const petName = document.getElementById('adoptPetName').textContent;
    const name = document.getElementById('adoptName').value;
    const age = document.getElementById('adoptAge').value;
    const email = document.getElementById('adoptEmail').value;
    const phone = document.getElementById('adoptPhone').value;
    const city = document.getElementById('adoptCity').value;
    const housing = document.getElementById('adoptHousingType').value;
    const reason = document.getElementById('adoptReason').value;
    const experience = document.getElementById('adoptExperience').value;
    const allergy = document.getElementById('adoptAllergy').value;

    showToast(`感谢 ${name} 的领养申请！我们会尽快与您联系。`);
    console.log(`领养申请 - 宠物: ${petName}, 名字: ${name}, 年龄: ${age}, 邮箱: ${email}, 电话: ${phone}, 城市: ${city}, 住房: ${housing}, 原因: ${reason}, 经验: ${experience}, 过敏: ${allergy}`);
    closeAdoptForm();
    closePetModal();
}

// ===== 修改领养按钮处理 =====
const originalHandleAdopt = handleAdopt;
function handleAdopt(petName) {
    const pet = petDetails[petName];
    showAdoptForm(petName);
}

window.onclick = function(event) {
    const petModal = document.getElementById('petModal');
    const detailsModal = document.getElementById('detailsModal');
    const donateModal = document.getElementById('donateModal');
    const donateModal2 = document.getElementById('donateModal2');
    const volunteerModal = document.getElementById('volunteerModal');
    const adoptModal = document.getElementById('adoptModal');
    const searchModal = document.getElementById('searchModal');
    
    if (event.target === petModal) {
        closePetModal();
    }
    if (event.target === detailsModal) {
        closeDetailsModal();
    }
    if (event.target === donateModal) {
        closeDonateForm();
    }
    if (event.target === donateModal2) {
        closeDonateForm2();
    }
    if (event.target === volunteerModal) {
        closeVolunteerForm();
    }
    if (event.target === adoptModal) {
        closeAdoptForm();
    }
    if (event.target === searchModal) {
        closeSearchForm();
    }
}

console.log('✨ 所有新功能已加载！');