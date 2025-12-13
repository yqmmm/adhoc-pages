import React, { useState, useEffect } from 'react';
import { Calculator, Users, DollarSign, TrendingUp, Download } from 'lucide-react';

const NagoyaTripExpense = () => {
  const exchangeRate = 4.5477; // 100日元 = 4.5477人民币
  
  // 所有支出项目
  const expenses = [
    // 周四
    { day: '周四', item: 'zxd yqm 900', amount: 900, currency: 'JPY', payers: ['zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周四', item: '牛角', amount: 21648, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周四', item: 'ws 充电宝', amount: 5000, currency: 'JPY', payers: ['ws'], paidBy: 'yqm' },
    { day: '周四', item: '展望台', amount: 3000, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    
    // 周五
    { day: '周五', item: '科美达咖啡', amount: 1800, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: 'JR 肥蛋', amount: 19020, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: '储物柜', amount: 900, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: '高山陣屋', amount: 1320, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: '丸', amount: 360, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: '拉面', amount: 5500, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: '清酒', amount: 1600, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: '清酒', amount: 1000, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: '打车', amount: 1060, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: '巴士+饮料', amount: 6000, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周五', item: '温泉酒店', amount: 55080, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    
    // 周六
    { day: '周六', item: '巴士', amount: 1710, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '酒店税', amount: 1050, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '缆车', amount: 11400, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '寄存', amount: 1000, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '巴士', amount: 2730, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '拍照', amount: 1800, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '两次饮料', amount: 1000, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '大巴', amount: 8400, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '午餐', amount: 3400, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: 'ws 扭蛋', amount: 500, currency: 'JPY', payers: ['ws'], paidBy: 'yqm' },
    { day: '周六', item: 'ws 榴弹', amount: 500, currency: 'JPY', payers: ['ws'], paidBy: 'yqm' },
    { day: '周六', item: 'ws zxd 酒店', amount: 24120, currency: 'JPY', payers: ['ws', 'zxd'], paidBy: 'yqm' },
    { day: '周六', item: '松本博物馆门票', amount: 4500, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '打车', amount: 1100, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '鰻', amount: 7500, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周六', item: '烧鸟', amount: 11159, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    
    // 周日
    { day: '周日', item: '早餐', amount: 3840, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周日', item: '车票', amount: 3600, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周日', item: '特级券', amount: 900, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周日', item: '普速车', amount: 1530, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周日', item: '取现手续费', amount: 520, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周日', item: '吃中饭', amount: 3300, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周日', item: '巴士', amount: 2400, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周日', item: '丰田博物馆', amount: 3000, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周日', item: '猪排', amount: 11880, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    
    // 周一
    { day: '周一', item: '海鲜丼', amount: 5600, currency: 'JPY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'yqm' },
    { day: '周一', item: 'ws', amount: 3200, currency: 'JPY', payers: ['ws'], paidBy: 'yqm' },
    { day: '周一', item: 'zxd', amount: 800, currency: 'JPY', payers: ['zxd'], paidBy: 'yqm' },
    
    // ws付款部分
    { day: 'ws付款', item: '名古屋第一晚', amount: 1300, currency: 'CNY', payers: ['ws', 'zxd', 'yqm'], paidBy: 'ws' },
    { day: 'ws付款', item: '名古屋第二晚 ws zxd', amount: 917.5, currency: 'CNY', payers: ['ws', 'zxd'], paidBy: 'ws' },
    { day: 'ws付款', item: '名古屋第二晚 yqm', amount: 747.51, currency: 'CNY', payers: ['yqm'], paidBy: 'ws' },
  ];

  const [calculation, setCalculation] = useState({
    wsShare: 0,
    zxdShare: 0,
    yqmShare: 0,
    wsPaid: 0,
    zxdPaid: 0,
    yqmPaid: 0,
    wsOwes: 0,
    zxdOwes: 0
  });

  useEffect(() => {
    // 计算每个人应该承担的金额
    let wsShare = 0, zxdShare = 0, yqmShare = 0;
    let wsPaid = 0, zxdPaid = 0, yqmPaid = 0;

    expenses.forEach(expense => {
      const { amount, currency, payers, paidBy } = expense;
      const amountInCNY = currency === 'JPY' ? (amount / 100) * exchangeRate : amount;
      const sharePerPerson = amountInCNY / payers.length;

      // 计算每个人应该承担的份额
      if (payers.includes('ws')) wsShare += sharePerPerson;
      if (payers.includes('zxd')) zxdShare += sharePerPerson;
      if (payers.includes('yqm')) yqmShare += sharePerPerson;

      // 计算每个人实际支付的金额
      if (paidBy === 'ws') wsPaid += amountInCNY;
      if (paidBy === 'zxd') zxdPaid += amountInCNY;
      if (paidBy === 'yqm') yqmPaid += amountInCNY;
    });

    // 计算每个人应该向yqm转账的金额（ws的付款应该抵扣）
    const wsOwes = wsShare - wsPaid;
    const zxdOwes = zxdShare - zxdPaid;

    setCalculation({
      wsShare,
      zxdShare,
      yqmShare,
      wsPaid,
      zxdPaid,
      yqmPaid,
      wsOwes,
      zxdOwes
    });
  }, []);

  const totalExpense = calculation.wsShare + calculation.zxdShare + calculation.yqmShare;

  // 导出CSV函数
  const exportToCSV = () => {
    // 构建CSV内容
    let csvContent = '\uFEFF'; // UTF-8 BOM for Excel compatibility
    
    // 标题和汇率信息
    csvContent += '名古屋旅行账目结算\n';
    csvContent += `汇率,100 JPY = ${exchangeRate} CNY\n`;
    csvContent += `导出时间,${new Date().toLocaleString('zh-CN')}\n\n`;
    
    // 结算结果
    csvContent += '=== 最终结算结果 ===\n';
    csvContent += '姓名,应承担金额(CNY),已支付金额(CNY),应转账金额(CNY)\n';
    csvContent += `WS,${calculation.wsShare.toFixed(2)},${calculation.wsPaid.toFixed(2)},${calculation.wsOwes.toFixed(2)}\n`;
    csvContent += `ZXD,${calculation.zxdShare.toFixed(2)},${calculation.zxdPaid.toFixed(2)},${calculation.zxdOwes.toFixed(2)}\n`;
    csvContent += `YQM,${calculation.yqmShare.toFixed(2)},${calculation.yqmPaid.toFixed(2)},${(calculation.yqmShare - calculation.yqmPaid).toFixed(2)}\n`;
    csvContent += `合计,${totalExpense.toFixed(2)},,\n\n`;
    
    // 详细账目表头
    csvContent += '=== 详细账目明细 ===\n';
    csvContent += '日期,项目,原始金额,币种,人民币总额,分摊人数,WS承担,ZXD承担,YQM承担,支付者\n';
    
    // 详细账目数据
    expenses.forEach(expense => {
      const amountInCNY = expense.currency === 'JPY' 
        ? (expense.amount / 100) * exchangeRate 
        : expense.amount;
      const sharePerPerson = amountInCNY / expense.payers.length;
      
      csvContent += `${expense.day},`;
      csvContent += `"${expense.item}",`;
      csvContent += `${expense.amount},`;
      csvContent += `${expense.currency},`;
      csvContent += `${amountInCNY.toFixed(2)},`;
      csvContent += `${expense.payers.length},`;
      csvContent += `${expense.payers.includes('ws') ? sharePerPerson.toFixed(2) : '-'},`;
      csvContent += `${expense.payers.includes('zxd') ? sharePerPerson.toFixed(2) : '-'},`;
      csvContent += `${expense.payers.includes('yqm') ? sharePerPerson.toFixed(2) : '-'},`;
      csvContent += `${expense.paidBy}\n`;
    });
    
    // 合计行
    csvContent += `,,,,合计,,${calculation.wsShare.toFixed(2)},${calculation.zxdShare.toFixed(2)},${calculation.yqmShare.toFixed(2)},\n\n`;
    
    // 计算说明
    csvContent += '=== 计算说明 ===\n';
    csvContent += '步骤1,每笔支出按汇率转换为人民币\n';
    csvContent += '步骤2,根据分摊者人数平均分配\n';
    csvContent += '步骤3,累计每个人应承担的总金额\n';
    csvContent += '步骤4,统计每个人实际支付的金额\n';
    csvContent += '步骤5,计算差额：应承担 - 已支付 = 应转账\n';
    
    // 创建下载链接
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `名古屋旅行账目_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
              <Calculator className="text-indigo-600" size={40} />
              名古屋旅行账目结算
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
              >
                <Download size={20} />
                导出CSV
              </button>
              <div className="text-right">
                <div className="text-sm text-gray-500">汇率</div>
                <div className="text-2xl font-bold text-indigo-600">
                  100 JPY = {exchangeRate} CNY
                </div>
              </div>
            </div>
          </div>

          {/* 总览卡片 */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <Users size={24} />
                <span className="text-sm opacity-90">WS</span>
              </div>
              <div className="text-3xl font-bold mb-1">¥{calculation.wsShare.toFixed(2)}</div>
              <div className="text-sm opacity-90">应承担金额</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <Users size={24} />
                <span className="text-sm opacity-90">ZXD</span>
              </div>
              <div className="text-3xl font-bold mb-1">¥{calculation.zxdShare.toFixed(2)}</div>
              <div className="text-sm opacity-90">应承担金额</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <Users size={24} />
                <span className="text-sm opacity-90">YQM</span>
              </div>
              <div className="text-3xl font-bold mb-1">¥{calculation.yqmShare.toFixed(2)}</div>
              <div className="text-sm opacity-90">应承担金额</div>
            </div>
          </div>

          {/* 结算结果 */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 mb-8 border-2 border-orange-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <DollarSign className="text-orange-600" size={28} />
              最终结算结果
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-semibold text-gray-700">WS 应向 YQM 转账：</span>
                    <div className="text-sm text-gray-500 mt-1">
                      应承担 ¥{calculation.wsShare.toFixed(2)} - 已支付 ¥{calculation.wsPaid.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    ¥{calculation.wsOwes.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-semibold text-gray-700">ZXD 应向 YQM 转账：</span>
                    <div className="text-sm text-gray-500 mt-1">
                      应承担 ¥{calculation.zxdShare.toFixed(2)} - 已支付 ¥{calculation.zxdPaid.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    ¥{calculation.zxdOwes.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-orange-200">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-gray-700">旅行总支出：</span>
                <span className="text-3xl font-bold text-orange-600">¥{totalExpense.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* 支付明细统计 */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="text-indigo-600" size={24} />
              支付统计
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-500 mb-1">WS 已支付</div>
                <div className="text-2xl font-bold text-blue-600">¥{calculation.wsPaid.toFixed(2)}</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-500 mb-1">ZXD 已支付</div>
                <div className="text-2xl font-bold text-purple-600">¥{calculation.zxdPaid.toFixed(2)}</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-500 mb-1">YQM 已支付</div>
                <div className="text-2xl font-bold text-green-600">¥{calculation.yqmPaid.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

                  {/* 详细账目表 */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">详细账目明细（含分摊计算）</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-200">
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">日期</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">项目</th>
                  <th className="px-3 py-3 text-right text-xs font-semibold text-gray-700">原始金额</th>
                  <th className="px-3 py-3 text-right text-xs font-semibold text-gray-700">人民币总额</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">分摊者</th>
                  <th className="px-3 py-3 text-right text-xs font-semibold text-gray-700">WS承担</th>
                  <th className="px-3 py-3 text-right text-xs font-semibold text-gray-700">ZXD承担</th>
                  <th className="px-3 py-3 text-right text-xs font-semibold text-gray-700">YQM承担</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">支付者</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => {
                  const amountInCNY = expense.currency === 'JPY' 
                    ? (expense.amount / 100) * exchangeRate 
                    : expense.amount;
                  const sharePerPerson = amountInCNY / expense.payers.length;
                  
                  return (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-3 py-3 text-xs text-gray-600">{expense.day}</td>
                      <td className="px-3 py-3 text-xs text-gray-800">{expense.item}</td>
                      <td className="px-3 py-3 text-xs text-right text-gray-800 font-mono">
                        {expense.amount.toLocaleString()} {expense.currency}
                      </td>
                      <td className="px-3 py-3 text-xs text-right text-gray-800 font-mono font-semibold">
                        ¥{amountInCNY.toFixed(2)}
                      </td>
                      <td className="px-3 py-3 text-xs text-gray-600">
                        {expense.payers.length}人
                      </td>
                      <td className="px-3 py-3 text-xs text-right font-mono">
                        <span className={expense.payers.includes('ws') ? 'text-blue-600 font-semibold' : 'text-gray-400'}>
                          {expense.payers.includes('ws') ? `¥${sharePerPerson.toFixed(2)}` : '-'}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-xs text-right font-mono">
                        <span className={expense.payers.includes('zxd') ? 'text-purple-600 font-semibold' : 'text-gray-400'}>
                          {expense.payers.includes('zxd') ? `¥${sharePerPerson.toFixed(2)}` : '-'}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-xs text-right font-mono">
                        <span className={expense.payers.includes('yqm') ? 'text-green-600 font-semibold' : 'text-gray-400'}>
                          {expense.payers.includes('yqm') ? `¥${sharePerPerson.toFixed(2)}` : '-'}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-xs">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          expense.paidBy === 'ws' ? 'bg-blue-100 text-blue-800' :
                          expense.paidBy === 'zxd' ? 'bg-purple-100 text-purple-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {expense.paidBy}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {/* 合计行 */}
                <tr className="bg-gray-200 border-t-2 border-gray-300 font-bold">
                  <td className="px-3 py-4 text-sm" colSpan="5">合计</td>
                  <td className="px-3 py-4 text-sm text-right text-blue-700 font-mono">
                    ¥{calculation.wsShare.toFixed(2)}
                  </td>
                  <td className="px-3 py-4 text-sm text-right text-purple-700 font-mono">
                    ¥{calculation.zxdShare.toFixed(2)}
                  </td>
                  <td className="px-3 py-4 text-sm text-right text-green-700 font-mono">
                    ¥{calculation.yqmShare.toFixed(2)}
                  </td>
                  <td className="px-3 py-4 text-sm"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* 计算过程说明 */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">💡 计算过程说明</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[80px]">步骤1:</span>
                <span>每笔支出按汇率（100日元={exchangeRate}人民币）转换为人民币</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[80px]">步骤2:</span>
                <span>根据分摊者人数平均分配每笔支出（例如3人分摊，每人承担1/3）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[80px]">步骤3:</span>
                <span>累计每个人应承担的总金额</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[80px]">步骤4:</span>
                <span>统计每个人实际支付的金额（yqm支付大部分，ws支付酒店费用）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[80px]">步骤5:</span>
                <span>计算差额：应承担金额 - 已支付金额 = 应转账金额</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t-2 border-blue-300 space-y-2">
              <div className="font-bold text-gray-800 mb-3">具体计算：</div>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-semibold">WS:</span>
                  <span className="font-mono text-sm">应承担 ¥{calculation.wsShare.toFixed(2)} - 已支付 ¥{calculation.wsPaid.toFixed(2)} = <span className="font-bold text-blue-700">¥{calculation.wsOwes.toFixed(2)}</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-700 font-semibold">ZXD:</span>
                  <span className="font-mono text-sm">应承担 ¥{calculation.zxdShare.toFixed(2)} - 已支付 ¥{calculation.zxdPaid.toFixed(2)} = <span className="font-bold text-purple-700">¥{calculation.zxdOwes.toFixed(2)}</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-semibold">YQM:</span>
                  <span className="font-mono text-sm">应承担 ¥{calculation.yqmShare.toFixed(2)} - 已支付 ¥{calculation.yqmPaid.toFixed(2)} = <span className="font-bold text-green-700">¥{(calculation.yqmShare - calculation.yqmPaid).toFixed(2)}</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NagoyaTripExpense;