import React from 'react'
import '../../assets/sass/infos/refund.scss'

function Refund() {
  return (
    <div>
      <h2 className='mt-5'>Biletin Qaytarılması və Dəyişdirilməsi</h2>
      <div className='refund mt-5'>

        <p className='refundtext'>Tədbirin baş tutmasına 48 saat və ya daha çox müddət qaldıqda bilet geri qaytarılarsa və ya dəyişdirilərsə, bilet dəyərinin 30%-i tutulur.</p>
        <p className='refundtext'>Tədbirin baş tutmasına 48 saat və ya daha az müddət qaldıqda bilet geri qaytarılmır və ya dəyişdirilmir.</p>
        <p className='refundtext'>Şəhər kassalarından alınmış biletlər 28 Mall və Gənclik Mall ticarət mərkəzlərində yerləşən satış məntəqələrimizində dəyişdirilir və ya qaytarılır. Əlaqə telefonu: (+994) 12 493 33 77.</p>
        <p className='refundtext'>iTicket.AZ veb-səhifəsindən alınmış elektron biletləri qaytarmaq və ya dəyişdirmək üçün +994 12 493 33 77 nömrəsi ilə əlaqə saxlaya bilərsiniz.</p>
      </div>
    </div>
  )
}

export default Refund