// 模拟数据 - 扩展更多数据
const mockData = [
    {
        id: 1,
        archiveNumber: '123123123123123123',
        name: '李文',
        gender: '男',
        birthDate: '2016-11-07',
        currentAddress: '湛江',
        householdAddress: '上海',
        phone: '776223123123',
        idNumber: '654367234567234567',
        createTime: '2025-05-24',
        updateTime: '2025-05-29',
        unit: '社区卫生服务中心'
    },
    {
        id: 2,
        archiveNumber: '10101010121310151X',
        name: '胡彦伟',
        gender: '男',
        birthDate: '2006-01-24',
        currentAddress: '上海',
        householdAddress: '广西',
        phone: '567883123123',
        idNumber: '456789456789456789',
        createTime: '2025-05-01',
        updateTime: '2025-05-29',
        unit: '乡镇卫生院'
    },
    {
        id: 3,
        archiveNumber: '202020202020202020',
        name: '张美丽',
        gender: '女',
        birthDate: '1990-03-15',
        currentAddress: '北京',
        householdAddress: '北京',
        phone: '13800138000',
        idNumber: '110101199003151234',
        createTime: '2025-05-20',
        updateTime: '2025-05-28',
        unit: '县级医院'
    },
    {
        id: 4,
        archiveNumber: '303030303030303030',
        name: '王强',
        gender: '男',
        birthDate: '1985-07-22',
        currentAddress: '广州',
        householdAddress: '深圳',
        phone: '13900139000',
        idNumber: '440101198507221234',
        createTime: '2025-05-18',
        updateTime: '2025-05-27',
        unit: '社区卫生服务中心'
    },
    {
        id: 5,
        archiveNumber: '404040404040404040',
        name: '李小红',
        gender: '女',
        birthDate: '1992-12-08',
        currentAddress: '杭州',
        householdAddress: '杭州',
        phone: '13700137000',
        idNumber: '330101199212081234',
        createTime: '2025-05-15',
        updateTime: '2025-05-26',
        unit: '乡镇卫生院'
    },
    {
        id: 6,
        archiveNumber: '505050505050505050',
        name: '陈大明',
        gender: '男',
        birthDate: '1978-05-30',
        currentAddress: '成都',
        householdAddress: '重庆',
        phone: '13600136000',
        idNumber: '510101197805301234',
        createTime: '2025-05-12',
        updateTime: '2025-05-25',
        unit: '县级医院'
    },
    {
        id: 7,
        archiveNumber: '606060606060606060',
        name: '刘芳',
        gender: '女',
        birthDate: '1988-09-14',
        currentAddress: '武汉',
        householdAddress: '武汉',
        phone: '13500135000',
        idNumber: '420101198809141234',
        createTime: '2025-05-10',
        updateTime: '2025-05-24',
        unit: '社区卫生服务中心'
    },
    {
        id: 8,
        archiveNumber: '707070707070707070',
        name: '赵伟',
        gender: '男',
        birthDate: '1995-02-18',
        currentAddress: '西安',
        householdAddress: '西安',
        phone: '13400134000',
        idNumber: '610101199502181234',
        createTime: '2025-05-08',
        updateTime: '2025-05-23',
        unit: '乡镇卫生院'
    },
    {
        id: 9,
        archiveNumber: '808080808080808080',
        name: '孙丽',
        gender: '女',
        birthDate: '1991-11-25',
        currentAddress: '南京',
        householdAddress: '南京',
        phone: '13300133000',
        idNumber: '320101199111251234',
        createTime: '2025-05-05',
        updateTime: '2025-05-22',
        unit: '县级医院'
    },
    {
        id: 10,
        archiveNumber: '909090909090909090',
        name: '周杰',
        gender: '男',
        birthDate: '1987-04-12',
        currentAddress: '青岛',
        householdAddress: '青岛',
        phone: '13200132000',
        idNumber: '370101198704121234',
        createTime: '2025-05-03',
        updateTime: '2025-05-21',
        unit: '社区卫生服务中心'
    },
    {
        id: 11,
        archiveNumber: '111111111111111111',
        name: '林小芳',
        gender: '女',
        birthDate: '1993-08-15',
        currentAddress: '厦门',
        householdAddress: '厦门',
        phone: '13100131000',
        idNumber: '350101199308151234',
        createTime: '2025-05-30',
        updateTime: '2025-05-30',
        unit: '乡镇卫生院'
    },
    {
        id: 12,
        archiveNumber: '222222222222222222',
        name: '黄志强',
        gender: '男',
        birthDate: '1980-12-03',
        currentAddress: '福州',
        householdAddress: '福州',
        phone: '13000130000',
        idNumber: '350101198012031234',
        createTime: '2025-05-29',
        updateTime: '2025-05-29',
        unit: '县级医院'
    },
    {
        id: 13,
        archiveNumber: '333333333333333333',
        name: '吴美丽',
        gender: '女',
        birthDate: '1995-06-20',
        currentAddress: '南昌',
        householdAddress: '南昌',
        phone: '12900129000',
        idNumber: '360101199506201234',
        createTime: '2025-05-28',
        updateTime: '2025-05-28',
        unit: '社区卫生服务中心'
    },
    {
        id: 14,
        archiveNumber: '444444444444444444',
        name: '郑大华',
        gender: '男',
        birthDate: '1975-09-10',
        currentAddress: '长沙',
        householdAddress: '长沙',
        phone: '12800128000',
        idNumber: '430101197509101234',
        createTime: '2025-05-27',
        updateTime: '2025-05-27',
        unit: '乡镇卫生院'
    },
    {
        id: 15,
        archiveNumber: '555555555555555555',
        name: '何小敏',
        gender: '女',
        birthDate: '1998-03-25',
        currentAddress: '昆明',
        householdAddress: '昆明',
        phone: '12700127000',
        idNumber: '530101199803251234',
        createTime: '2025-05-26',
        updateTime: '2025-05-26',
        unit: '县级医院'
    }
];

// 全局变量
let currentPage = 1;
let pageSize = 10;
let totalRecords = mockData.length;
let filteredData = [...mockData];
let editingRecordId = null;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化主页模块
    showModule('home');
    loadRecords();
    generatePagination();
});

// 简单的模态框功能
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
}

// 菜单切换功能
function toggleMenu(menuId) {
    const submenu = document.getElementById(menuId);
    const menuTitle = event.target.closest('.menu-title');
    const arrow = menuTitle.querySelector('.menu-arrow');
    
    if (submenu) {
        if (submenu.classList.contains('show')) {
            submenu.classList.remove('show');
            arrow.textContent = '▶';
        } else {
            submenu.classList.add('show');
            arrow.textContent = '▼';
        }
    }
}

// 点击模态框外部关闭
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        hideModal(e.target.id);
    }
});

// 加载记录数据
function loadRecords() {
    const tbody = document.getElementById('recordsTableBody');
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageData = filteredData.slice(startIndex, endIndex);
    
    tbody.innerHTML = '';
    
    if (pageData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="12" class="text-center py-4">
                    <div class="empty-state">
                        <i class="fas fa-inbox"></i>
                        <p>暂无数据</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
    
    pageData.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <input type="checkbox" class="form-check-input record-checkbox" value="${record.id}">
            </td>
            <td>${record.archiveNumber}</td>
            <td>${record.name}</td>
            <td>${record.gender}</td>
            <td>${record.birthDate}</td>
            <td>${record.currentAddress}</td>
            <td>${record.householdAddress}</td>
            <td>${record.phone}</td>
            <td>${record.idNumber}</td>
            <td>${record.createTime}</td>
            <td>${record.updateTime}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editRecord(${record.id})" title="编辑">
                    ✏️
                </button>
                <button class="action-btn delete-btn" onclick="deleteRecord(${record.id})" title="删除">
                    🗑️
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// 生成分页
function generatePagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredData.length / pageSize);
    
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // 上一页按钮
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage - 1})">上页</a>`;
    pagination.appendChild(prevLi);
    
    // 页码按钮
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
        pagination.appendChild(li);
    }
    
    // 下一页按钮
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage + 1})">下页</a>`;
    pagination.appendChild(nextLi);
}

// 切换页面
function changePage(page) {
    const totalPages = Math.ceil(filteredData.length / pageSize);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    loadRecords();
    generatePagination();
}

// 改变页面大小
function changePageSize(newPageSize) {
    pageSize = parseInt(newPageSize);
    currentPage = 1;
    loadRecords();
    generatePagination();
}

// 搜索记录
function searchRecords() {
    const unit = document.getElementById('unit').value;
    const name = document.getElementById('name').value.toLowerCase();
    const idNumber = document.getElementById('idNumber').value.toLowerCase();
    const gender = document.getElementById('gender').value;
    const birthStart = document.getElementById('birthStart').value;
    const birthEnd = document.getElementById('birthEnd').value;
    const updateStart = document.getElementById('updateStart').value;
    const updateEnd = document.getElementById('updateEnd').value;
    
    filteredData = mockData.filter(record => {
        let match = true;
        
        if (unit && record.unit !== unit) match = false;
        if (name && !record.name.toLowerCase().includes(name)) match = false;
        if (idNumber && !record.idNumber.toLowerCase().includes(idNumber)) match = false;
        if (gender && record.gender !== gender) match = false;
        
        if (birthStart && record.birthDate < birthStart) match = false;
        if (birthEnd && record.birthDate > birthEnd) match = false;
        if (updateStart && record.updateTime < updateStart) match = false;
        if (updateEnd && record.updateTime > updateEnd) match = false;
        
        return match;
    });
    
    currentPage = 1;
    loadRecords();
    generatePagination();
}

// 新增记录
function addRecord() {
    editingRecordId = null;
    document.getElementById('recordModalTitle').textContent = '新增个人健康档案';
    document.getElementById('recordForm').reset();
    
    // 设置默认时间为当前时间
    const now = new Date();
    const currentDateTime = now.toISOString().slice(0, 16);
    document.getElementById('modalCreateTime').value = currentDateTime;
    document.getElementById('modalUpdateTime').value = currentDateTime;
    
    showModal('recordModal');
}

// 编辑记录
function editRecord(id) {
    const record = mockData.find(r => r.id === id);
    if (!record) return;
    
    editingRecordId = id;
    document.getElementById('recordModalTitle').textContent = '编辑个人健康档案';
    
    // 填充表单数据
    document.getElementById('modalName').value = record.name;
    document.getElementById('modalGender').value = record.gender;
    document.getElementById('modalBirthDate').value = record.birthDate;
    document.getElementById('modalIdNumber').value = record.idNumber;
    document.getElementById('modalCurrentAddress').value = record.currentAddress;
    document.getElementById('modalHouseholdAddress').value = record.householdAddress;
    document.getElementById('modalPhone').value = record.phone;
    document.getElementById('modalUnit').value = record.unit;
    
    // 填充时间字段（转换为datetime-local格式）
    document.getElementById('modalCreateTime').value = formatDateTimeForInput(record.createTime);
    document.getElementById('modalUpdateTime').value = formatDateTimeForInput(record.updateTime);
    
    showModal('recordModal');
}

// 格式化日期时间用于datetime-local输入
function formatDateTimeForInput(dateString) {
    if (!dateString) return '';
    
    // 如果只有日期，添加默认时间
    if (dateString.length === 10) {
        return dateString + 'T00:00';
    }
    
    // 如果已经是完整的日期时间格式，直接返回
    if (dateString.includes('T')) {
        return dateString;
    }
    
    // 尝试解析并格式化
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return dateString + 'T00:00';
        }
        return date.toISOString().slice(0, 16);
    } catch (error) {
        return dateString + 'T00:00';
    }
}

// 格式化日期时间用于存储
function formatDateTimeForStorage(dateTimeString) {
    if (!dateTimeString) return '';
    
    try {
        const date = new Date(dateTimeString);
        if (isNaN(date.getTime())) {
            return dateTimeString;
        }
        // 返回 YYYY-MM-DD HH:mm:ss 格式
        return date.toISOString().slice(0, 19).replace('T', ' ');
    } catch (error) {
        return dateTimeString;
    }
}

// 保存记录
function saveRecord() {
    const form = document.getElementById('recordForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const formData = {
        name: document.getElementById('modalName').value,
        gender: document.getElementById('modalGender').value,
        birthDate: document.getElementById('modalBirthDate').value,
        idNumber: document.getElementById('modalIdNumber').value,
        currentAddress: document.getElementById('modalCurrentAddress').value,
        householdAddress: document.getElementById('modalHouseholdAddress').value,
        phone: document.getElementById('modalPhone').value,
        unit: document.getElementById('modalUnit').value
    };
    
    if (editingRecordId) {
        // 编辑现有记录
        const recordIndex = mockData.findIndex(r => r.id === editingRecordId);
        if (recordIndex !== -1) {
            mockData[recordIndex] = {
                ...mockData[recordIndex],
                ...formData,
                updateTime: new Date().toISOString().split('T')[0]
            };
        }
    } else {
        // 新增记录
        const newRecord = {
            id: Math.max(...mockData.map(r => r.id)) + 1,
            archiveNumber: generateArchiveNumber(),
            ...formData,
            createTime: new Date().toISOString().split('T')[0],
            updateTime: new Date().toISOString().split('T')[0]
        };
        mockData.push(newRecord);
        totalRecords = mockData.length;
    }
    
    // 重新应用筛选
    searchRecords();
    
    // 关闭模态框
    hideModal('recordModal');
    
    showNotification('保存成功！', 'success');
}

// 删除记录
function deleteRecord(id) {
    if (confirm('确定要删除这条记录吗？')) {
        const recordIndex = mockData.findIndex(r => r.id === id);
        if (recordIndex !== -1) {
            mockData.splice(recordIndex, 1);
            totalRecords = mockData.length;
            searchRecords();
            showNotification('删除成功！', 'success');
        }
    }
}

// 批量处理
function batchProcess() {
    const checkedBoxes = document.querySelectorAll('.record-checkbox:checked');
    if (checkedBoxes.length === 0) {
        showNotification('请先选择要处理的记录！', 'warning');
        return;
    }
    
    const selectedIds = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    
    if (confirm(`确定要删除选中的 ${selectedIds.length} 条记录吗？`)) {
        // 从后往前删除，避免索引问题
        selectedIds.sort((a, b) => b - a).forEach(id => {
            const recordIndex = mockData.findIndex(r => r.id === id);
            if (recordIndex !== -1) {
                mockData.splice(recordIndex, 1);
            }
        });
        
        totalRecords = mockData.length;
        searchRecords();
        showNotification(`成功删除 ${selectedIds.length} 条记录！`, 'success');
    }
}

// 切换所有复选框
function toggleAllCheckboxes(checkbox) {
    const recordCheckboxes = document.querySelectorAll('.record-checkbox');
    recordCheckboxes.forEach(cb => {
        cb.checked = checkbox.checked;
    });
}

// 生成档案号
function generateArchiveNumber() {
    const timestamp = Date.now().toString();
    return timestamp.slice(-18).padStart(18, '0');
}

// 显示提示信息
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 80px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.parentNode.removeChild(alertDiv);
        }
    }, 3000);
}

// 重置搜索表单
function resetSearchForm() {
    document.getElementById('unit').value = '';
    document.getElementById('name').value = '';
    document.getElementById('idNumber').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('birthStart').value = '';
    document.getElementById('birthEnd').value = '';
    document.getElementById('updateStart').value = '';
    document.getElementById('updateEnd').value = '';
    
    filteredData = [...mockData];
    currentPage = 1;
    loadRecords();
    generatePagination();
}

// 导出数据
function exportData() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "健康档案号,姓名,性别,出生日期,现住地址,户口地址,联系电话,身份证号,创建时间,更新时间,所属单位\n"
        + filteredData.map(record => 
            `${record.archiveNumber},${record.name},${record.gender},${record.birthDate},${record.currentAddress},${record.householdAddress},${record.phone},${record.idNumber},${record.createTime},${record.updateTime},${record.unit}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `个人健康档案_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('数据导出成功！', 'success');
}

// 显示导入模态框
function showImportModal() {
    showModal('importModal');
}

// 处理文件选择
function handleFileSelect(input) {
    const file = input.files[0];
    const fileInfo = document.getElementById('fileInfo');
    const importBtn = document.getElementById('importBtn');
    
    if (file) {
        fileInfo.innerHTML = `
            <strong>已选择文件：</strong>${file.name}<br>
            <strong>文件大小：</strong>${(file.size / 1024).toFixed(2)} KB<br>
            <strong>文件类型：</strong>${file.type || '未知'}
        `;
        importBtn.disabled = false;
    } else {
        fileInfo.innerHTML = '';
        importBtn.disabled = true;
    }
}

// 导入数据
function importData() {
    const fileInput = document.getElementById('importFile');
    const file = fileInput.files[0];
    
    if (!file) {
        showNotification('请先选择要导入的文件！', 'warning');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const csv = e.target.result;
            const lines = csv.split('\n');
            const headers = lines[0].split(',');
            
            let importedCount = 0;
            let errorCount = 0;
            const errors = [];
            
            for (let i = 1; i < lines.length; i++) {
                if (lines[i].trim()) {
                    const values = lines[i].split(',');
                    if (values.length >= 4) {
                        const newRecord = {
                            id: Math.max(...mockData.map(r => r.id)) + importedCount + 1,
                            archiveNumber: generateArchiveNumber(),
                            name: values[0] || '',
                            gender: values[1] || '',
                            birthDate: values[2] || '',
                            currentAddress: values[3] || '',
                            householdAddress: values[4] || '',
                            phone: values[5] || '',
                            idNumber: values[6] || '',
                            createTime: new Date().toISOString().split('T')[0],
                            updateTime: new Date().toISOString().split('T')[0],
                            unit: values[7] || '社区卫生服务中心'
                        };
                        
                        // 检查身份证号是否重复
                        if (!mockData.some(r => r.idNumber === newRecord.idNumber)) {
                            mockData.push(newRecord);
                            importedCount++;
                        } else {
                            errorCount++;
                            errors.push(`第${i+1}行：身份证号 ${newRecord.idNumber} 已存在`);
                        }
                    } else {
                        errorCount++;
                        errors.push(`第${i+1}行：数据格式不正确`);
                    }
                }
            }
            
            totalRecords = mockData.length;
            searchRecords();
            hideModal('importModal');
            
            if (errorCount > 0) {
                showNotification(`导入完成！成功导入 ${importedCount} 条记录，${errorCount} 条失败`, 'warning');
                console.log('导入错误详情：', errors);
            } else {
                showNotification(`成功导入 ${importedCount} 条记录！`, 'success');
            }
            
        } catch (error) {
            showNotification('文件解析失败，请检查文件格式！', 'error');
            console.error('导入错误：', error);
        }
    };
    
    reader.readAsText(file, 'UTF-8');
}

// 显示统计模态框
function showStatistics() {
    updateStatistics();
    showModal('statisticsModal');
}

// 更新统计数据
function updateStatistics() {
    const totalRecordsEl = document.getElementById('totalRecords');
    const maleCountEl = document.getElementById('maleCount');
    const femaleCountEl = document.getElementById('femaleCount');
    const unitStatsEl = document.getElementById('unitStats');
    const ageStatsEl = document.getElementById('ageStats');
    const recentUpdatesEl = document.getElementById('recentUpdates');
    
    // 基本统计
    totalRecordsEl.textContent = mockData.length;
    const maleCount = mockData.filter(r => r.gender === '男').length;
    const femaleCount = mockData.filter(r => r.gender === '女').length;
    maleCountEl.textContent = maleCount;
    femaleCountEl.textContent = femaleCount;
    
    // 按单位统计
    const unitStats = {};
    mockData.forEach(record => {
        unitStats[record.unit] = (unitStats[record.unit] || 0) + 1;
    });
    
    unitStatsEl.innerHTML = Object.entries(unitStats)
        .map(([unit, count]) => `
            <div class="stat-bar">
                <div class="stat-bar-label">${unit}</div>
                <div class="stat-bar-value">${count} 人</div>
            </div>
        `).join('');
    
    // 按年龄段统计
    const ageStats = {
        '0-18岁': 0,
        '19-35岁': 0,
        '36-50岁': 0,
        '51-65岁': 0,
        '65岁以上': 0
    };
    
    mockData.forEach(record => {
        const age = new Date().getFullYear() - new Date(record.birthDate).getFullYear();
        if (age <= 18) ageStats['0-18岁']++;
        else if (age <= 35) ageStats['19-35岁']++;
        else if (age <= 50) ageStats['36-50岁']++;
        else if (age <= 65) ageStats['51-65岁']++;
        else ageStats['65岁以上']++;
    });
    
    ageStatsEl.innerHTML = Object.entries(ageStats)
        .map(([ageGroup, count]) => `
            <div class="stat-bar">
                <div class="stat-bar-label">${ageGroup}</div>
                <div class="stat-bar-value">${count} 人</div>
            </div>
        `).join('');
    
    // 最近更新
    const recentRecords = mockData
        .sort((a, b) => new Date(b.updateTime) - new Date(a.updateTime))
        .slice(0, 10);
    
    recentUpdatesEl.innerHTML = recentRecords
        .map(record => `
            <div class="update-item">
                <span class="update-name">${record.name}</span>
                <span class="update-time">${record.updateTime}</span>
            </div>
        `).join('');
}

// 导出统计数据
function exportStatistics() {
    const statsData = {
        总记录数: mockData.length,
        男性人数: mockData.filter(r => r.gender === '男').length,
        女性人数: mockData.filter(r => r.gender === '女').length,
        统计时间: new Date().toLocaleString()
    };
    
    const csvContent = "data:text/csv;charset=utf-8," 
        + "统计项目,数值\n"
        + Object.entries(statsData).map(([key, value]) => `${key},${value}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `数据统计_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('统计数据导出成功！', 'success');
}

// 模块切换功能
function showModule(moduleType) {
    console.log('切换到模块:', moduleType); // 调试信息
    
    const mainContent = document.querySelector('.main-content');
    const breadcrumb = document.querySelector('.breadcrumb');
    
    if (!mainContent || !breadcrumb) {
        console.error('找不到主内容区域或面包屑导航');
        return;
    }
    
    // 更新面包屑
    breadcrumb.innerHTML = `
        <span class="breadcrumb-item">
            <a href="#" onclick="showModule('home')">主页</a>
        </span>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-item active">${getModuleTitle(moduleType)}</span>
    `;
    
    // 更新主内容
    mainContent.innerHTML = getModuleContent(moduleType);
    
    // 更新菜单状态
    updateMenuState(moduleType);
    
    console.log('模块切换完成:', moduleType);
}

// 获取模块标题
function getModuleTitle(moduleType) {
    const titles = {
        'home': '个人健康档案',
        'checkup': '健康体检',
        'browser': '健康档案浏览器',
        'children': '儿童健康管理',
        'women': '妇女健康管理',
        'disease': '疾病档案',
        'elderly': '老年人健康管理',
        'rehabilitation': '康复档案'
    };
    return titles[moduleType] || '个人健康档案';
}

// 获取模块内容
function getModuleContent(moduleType) {
    const contents = {
        'home': getHomeContent(),
        'checkup': getCheckupContent(),
        'browser': getBrowserContent(),
        'children': getChildrenContent(),
        'women': getWomenContent(),
        'disease': getDiseaseContent(),
        'elderly': getElderlyContent(),
        'rehabilitation': getRehabilitationContent()
    };
    return contents[moduleType] || getHomeContent();
}

// 更新菜单状态
function updateMenuState(moduleType) {
    // 重置所有菜单项
    document.querySelectorAll('.submenu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 激活当前菜单项
    const activeItem = document.querySelector(`[onclick="showModule('${moduleType}')"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
    
    // 如果是主页模块，需要重新加载数据
    if (moduleType === 'home') {
        setTimeout(() => {
            loadRecords();
            generatePagination();
        }, 100);
    }
}

// 主页内容
function getHomeContent() {
    return `
        <!-- 面包屑导航 -->
        <div class="breadcrumb">
            <span class="breadcrumb-item">
                <a href="#" onclick="showModule('home')">主页</a>
            </span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item active">个人健康档案</span>
        </div>

        <!-- 搜索筛选区域 -->
        <div class="search-section">
            <div class="search-form">
                <div class="form-row">
                    <div class="form-group">
                        <label>所属单位</label>
                        <select class="form-control">
                            <option value="">请选择</option>
                            <option value="unit1">社区卫生服务中心</option>
                            <option value="unit2">乡镇卫生院</option>
                            <option value="unit3">县级医院</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>姓名</label>
                        <input type="text" class="form-control" placeholder="姓名">
                    </div>
                    <div class="form-group">
                        <label>身份证号</label>
                        <input type="text" class="form-control" placeholder="身份证号">
                    </div>
                    <div class="form-group">
                        <label>性别</label>
                        <select class="form-control">
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>出生日期</label>
                        <div class="date-range">
                            <input type="date" class="form-control" placeholder="开始时间">
                            <span class="date-separator">-</span>
                            <input type="date" class="form-control" placeholder="结束时间">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>更新日期</label>
                        <div class="date-range">
                            <input type="date" class="form-control" placeholder="开始时间">
                            <span class="date-separator">-</span>
                            <input type="date" class="form-control" placeholder="结束时间">
                        </div>
                    </div>
                </div>
                <div class="form-actions">
                    <button class="btn btn-primary" onclick="searchRecords()">查询</button>
                    <button class="btn btn-success" onclick="addRecord()">新增</button>
                    <button class="btn btn-warning" onclick="batchProcess()">批量处理</button>
                    <button class="btn btn-info" onclick="exportData()">导出数据</button>
                    <button class="btn btn-secondary" onclick="showImportModal()">导入数据</button>
                    <button class="btn btn-outline-primary" onclick="showStatistics()">数据统计</button>
                </div>
            </div>
        </div>

        <!-- 数据表格区域 -->
        <div class="table-section">
            <div class="table-header">
                <h3>个人健康档案信息</h3>
                <div class="table-controls">
                    <span>显示</span>
                    <select class="page-size-select" onchange="changePageSize(this.value)">
                        <option value="10">10 条结果</option>
                        <option value="20">20 条结果</option>
                        <option value="50">50 条结果</option>
                        <option value="100">100 条结果</option>
                    </select>
                </div>
            </div>
            
            <div class="table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="select-all" onchange="toggleAllCheckboxes(this)"></th>
                            <th>健康档案号</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>出生日期</th>
                            <th>现住地址</th>
                            <th>户口地址</th>
                            <th>联系电话</th>
                            <th>身份证号</th>
                            <th>创建时间</th>
                            <th>更新时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody id="recordsTableBody">
                        <!-- 数据将通过JavaScript动态加载 -->
                    </tbody>
                </table>
            </div>
            
            <!-- 分页 -->
            <div class="pagination-container">
                <div class="pagination">
                    <button class="page-btn" onclick="changePage(1)">上页</button>
                    <button class="page-btn active">1</button>
                    <button class="page-btn">2</button>
                    <button class="page-btn">3</button>
                    <button class="page-btn">4</button>
                    <button class="page-btn">5</button>
                    <button class="page-btn" onclick="changePage(2)">下页</button>
                </div>
            </div>
        </div>
    `;
}

// 健康体检内容
function getCheckupContent() {
    return `
        <div class="breadcrumb">
            <span class="breadcrumb-item">
                <a href="#" onclick="showModule('home')">主页</a>
            </span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item active">健康体检</span>
        </div>
        
        <div class="search-section">
            <h3>健康体检管理</h3>
            <p>此模块用于管理个人健康体检记录，包括体检预约、体检结果录入、体检报告生成等功能。</p>
            <div class="form-actions">
                <button class="btn btn-primary">新增体检</button>
                <button class="btn btn-success">体检预约</button>
                <button class="btn btn-info">体检报告</button>
            </div>
        </div>
        
        <div class="table-section">
            <h3>体检记录</h3>
            <div class="empty-state">
                <div class="icon">🏥</div>
                <p>暂无体检记录</p>
                <button class="btn btn-primary" onclick="showNotification('功能开发中...', 'info')">添加体检记录</button>
            </div>
        </div>
    `;
}

// 健康档案浏览器内容
function getBrowserContent() {
    return `
        <div class="breadcrumb">
            <span class="breadcrumb-item">
                <a href="#" onclick="showModule('home')">主页</a>
            </span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item active">健康档案浏览器</span>
        </div>
        
        <div class="search-section">
            <h3>健康档案浏览器</h3>
            <p>此模块用于浏览和查看个人健康档案的详细信息，支持档案检索、档案对比、档案分析等功能。</p>
            <div class="form-actions">
                <button class="btn btn-primary">档案检索</button>
                <button class="btn btn-success">档案对比</button>
                <button class="btn btn-info">档案分析</button>
            </div>
        </div>
        
        <div class="table-section">
            <h3>档案浏览</h3>
            <div class="empty-state">
                <div class="icon">📊</div>
                <p>暂无档案数据</p>
                <button class="btn btn-primary" onclick="showNotification('功能开发中...', 'info')">开始浏览</button>
            </div>
        </div>
    `;
}

// 儿童健康管理内容
function getChildrenContent() {
    return `
        <div class="breadcrumb">
            <span class="breadcrumb-item">
                <a href="#" onclick="showModule('home')">主页</a>
            </span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item active">儿童健康管理</span>
        </div>
        
        <div class="search-section">
            <h3>儿童健康管理</h3>
            <p>此模块专门用于管理0-18岁儿童的健康档案，包括疫苗接种、生长发育监测、健康评估等功能。</p>
            <div class="form-actions">
                <button class="btn btn-primary">新增儿童档案</button>
                <button class="btn btn-success">疫苗接种</button>
                <button class="btn btn-info">生长发育</button>
            </div>
        </div>
        
        <div class="table-section">
            <h3>儿童档案</h3>
            <div class="empty-state">
                <div class="icon">👶</div>
                <p>暂无儿童档案</p>
                <button class="btn btn-primary" onclick="showNotification('功能开发中...', 'info')">添加儿童档案</button>
            </div>
        </div>
    `;
}

// 妇女健康管理内容
function getWomenContent() {
    return `
        <div class="breadcrumb">
            <span class="breadcrumb-item">
                <a href="#" onclick="showModule('home')">主页</a>
            </span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item active">妇女健康管理</span>
        </div>
        
        <div class="search-section">
            <h3>妇女健康管理</h3>
            <p>此模块专门用于管理妇女健康档案，包括孕产期保健、妇科检查、计划生育服务等功能。</p>
            <div class="form-actions">
                <button class="btn btn-primary">新增妇女档案</button>
                <button class="btn btn-success">孕产期保健</button>
                <button class="btn btn-info">妇科检查</button>
            </div>
        </div>
        
        <div class="table-section">
            <h3>妇女档案</h3>
            <div class="empty-state">
                <div class="icon">👩</div>
                <p>暂无妇女档案</p>
                <button class="btn btn-primary" onclick="showNotification('功能开发中...', 'info')">添加妇女档案</button>
            </div>
        </div>
    `;
}

// 疾病档案内容
function getDiseaseContent() {
    return `
        <div class="breadcrumb">
            <span class="breadcrumb-item">
                <a href="#" onclick="showModule('home')">主页</a>
            </span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item active">疾病档案</span>
        </div>
        
        <div class="search-section">
            <h3>疾病档案管理</h3>
            <p>此模块用于管理疾病档案，包括慢性病管理、传染病监测、疾病预防等功能。</p>
            <div class="form-actions">
                <button class="btn btn-primary">新增疾病档案</button>
                <button class="btn btn-success">慢性病管理</button>
                <button class="btn btn-info">传染病监测</button>
            </div>
        </div>
        
        <div class="table-section">
            <h3>疾病档案</h3>
            <div class="empty-state">
                <div class="icon">❤️</div>
                <p>暂无疾病档案</p>
                <button class="btn btn-primary" onclick="showNotification('功能开发中...', 'info')">添加疾病档案</button>
            </div>
        </div>
    `;
}

// 老年人健康管理内容
function getElderlyContent() {
    return `
        <div class="breadcrumb">
            <span class="breadcrumb-item">
                <a href="#" onclick="showModule('home')">主页</a>
            </span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item active">老年人健康管理</span>
        </div>
        
        <div class="search-section">
            <h3>老年人健康管理</h3>
            <p>此模块专门用于管理65岁以上老年人的健康档案，包括健康评估、慢病管理、养老服务等功能。</p>
            <div class="form-actions">
                <button class="btn btn-primary">新增老年人档案</button>
                <button class="btn btn-success">健康评估</button>
                <button class="btn btn-info">慢病管理</button>
            </div>
        </div>
        
        <div class="table-section">
            <h3>老年人档案</h3>
            <div class="empty-state">
                <div class="icon">👴</div>
                <p>暂无老年人档案</p>
                <button class="btn btn-primary" onclick="showNotification('功能开发中...', 'info')">添加老年人档案</button>
            </div>
        </div>
    `;
}

// 康复档案内容
function getRehabilitationContent() {
    return `
        <div class="breadcrumb">
            <span class="breadcrumb-item">
                <a href="#" onclick="showModule('home')">主页</a>
            </span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item active">康复档案</span>
        </div>
        
        <div class="search-section">
            <h3>康复档案管理</h3>
            <p>此模块用于管理康复档案，包括康复计划制定、康复训练记录、康复效果评估等功能。</p>
            <div class="form-actions">
                <button class="btn btn-primary">新增康复档案</button>
                <button class="btn btn-success">康复计划</button>
                <button class="btn btn-info">康复训练</button>
            </div>
        </div>
        
        <div class="table-section">
            <h3>康复档案</h3>
            <div class="empty-state">
                <div class="icon">♿</div>
                <p>暂无康复档案</p>
                <button class="btn btn-primary" onclick="showNotification('功能开发中...', 'info')">添加康复档案</button>
            </div>
        </div>
    `;
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 18px; cursor: pointer; color: #999;">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// 键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // Ctrl + N: 新增记录
    if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        addRecord();
    }
    
    // Ctrl + F: 聚焦搜索框
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.getElementById('name').focus();
    }
    
    // Escape: 关闭模态框
    if (e.key === 'Escape') {
        hideModal('recordModal');
    }
});

// 表单验证
function validateForm() {
    const name = document.getElementById('modalName').value.trim();
    const gender = document.getElementById('modalGender').value;
    const birthDate = document.getElementById('modalBirthDate').value;
    const idNumber = document.getElementById('modalIdNumber').value.trim();
    const createTime = document.getElementById('modalCreateTime').value;
    const updateTime = document.getElementById('modalUpdateTime').value;
    
    if (!name) {
        showNotification('请输入姓名！', 'error');
        return false;
    }
    
    if (!gender) {
        showNotification('请选择性别！', 'error');
        return false;
    }
    
    if (!birthDate) {
        showNotification('请选择出生日期！', 'error');
        return false;
    }
    
    if (!idNumber) {
        showNotification('请输入身份证号！', 'error');
        return false;
    }
    
    // 简单的身份证号验证
    if (!/^\d{17}[\dXx]$/.test(idNumber)) {
        showNotification('请输入正确的身份证号！', 'error');
        return false;
    }
    
    // 时间验证
    if (createTime && updateTime) {
        const createDate = new Date(createTime);
        const updateDate = new Date(updateTime);
        
        if (createDate > updateDate) {
            showNotification('创建时间不能晚于更新时间！', 'error');
            return false;
        }
        
        if (createDate > new Date()) {
            showNotification('创建时间不能是未来时间！', 'error');
            return false;
        }
    }
    
    return true;
}

// 修改保存记录函数，添加验证
function saveRecord() {
    if (!validateForm()) {
        return;
    }
    
    const formData = {
        name: document.getElementById('modalName').value.trim(),
        gender: document.getElementById('modalGender').value,
        birthDate: document.getElementById('modalBirthDate').value,
        idNumber: document.getElementById('modalIdNumber').value.trim(),
        currentAddress: document.getElementById('modalCurrentAddress').value.trim(),
        householdAddress: document.getElementById('modalHouseholdAddress').value.trim(),
        phone: document.getElementById('modalPhone').value.trim(),
        unit: document.getElementById('modalUnit').value,
        createTime: formatDateTimeForStorage(document.getElementById('modalCreateTime').value),
        updateTime: formatDateTimeForStorage(document.getElementById('modalUpdateTime').value)
    };
    
    if (editingRecordId) {
        // 编辑现有记录
        const recordIndex = mockData.findIndex(r => r.id === editingRecordId);
        if (recordIndex !== -1) {
            mockData[recordIndex] = {
                ...mockData[recordIndex],
                ...formData,
                updateTime: new Date().toISOString().split('T')[0]
            };
        }
    } else {
        // 检查身份证号是否已存在
        if (mockData.some(r => r.idNumber === formData.idNumber)) {
            showNotification('该身份证号已存在！', 'error');
            return;
        }
        
        // 新增记录
        const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const newRecord = {
            id: Math.max(...mockData.map(r => r.id)) + 1,
            archiveNumber: generateArchiveNumber(),
            ...formData,
            createTime: formData.createTime || currentDateTime,
            updateTime: formData.updateTime || currentDateTime
        };
        mockData.push(newRecord);
        totalRecords = mockData.length;
    }
    
    // 重新应用筛选
    searchRecords();
    
    // 关闭模态框
    hideModal('recordModal');
    
    showNotification('保存成功！', 'success');
}
