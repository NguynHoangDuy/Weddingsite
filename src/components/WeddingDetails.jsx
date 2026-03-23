import { motion } from 'motion/react';
import { CEREMONY, RECEPTION } from '../config/wedding';

function DetailBlock({ label, value, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <p style={{
        fontFamily: 'Crimson Text, serif',
        fontSize: 10,
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: '#C9A96E',
        marginBottom: 5,
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: 'Crimson Text, serif',
        fontSize: '1.12rem',
        color: '#2C2825',
        lineHeight: 1.5,
      }}>
        {value}
      </p>
      {sub && (
        <p style={{
          fontFamily: 'Crimson Text, serif',
          fontSize: '0.88rem',
          color: '#9A8E83',
          fontStyle: 'italic',
          marginTop: 3,
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function EventCard({ title, details, delay }) {
  return (
    <motion.div
      style={{
        background: '#FAFAF8',
        borderRadius: 4,
        boxShadow: '0 8px 40px rgba(44,40,37,0.07), 0 2px 8px rgba(44,40,37,0.04)',
        borderTop: '2px solid #C9A96E',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      <div style={{ padding: 'clamp(32px, 5vw, 52px) clamp(28px, 4vw, 44px)' }}>
        {/* Card header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ color: '#C9A96E', fontSize: 11, lineHeight: 1 }}>✦</span>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#2C2825',
            margin: '10px 0 14px',
            letterSpacing: '-0.01em',
          }}>
            {title}
          </h3>
          <div style={{ width: 40, height: 1, background: 'linear-gradient(to right, transparent, #C9A96E, transparent)', margin: '0 auto' }} />
        </div>

        {/* Details */}
        <div>
          {details.map(d => (
            <DetailBlock key={d.label} {...d} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function WeddingDetails() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #EDEBE8 0%, #E9E7E3 100%)',
      padding: '88px 24px 100px',
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>

        {/* ── Header ── */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: 68 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 36, height: 1, background: 'linear-gradient(to left, #C9A96E, transparent)' }} />
            <span style={{ fontFamily: 'Crimson Text, serif', fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C9A96E' }}>
              Save the Date
            </span>
            <div style={{ width: 36, height: 1, background: 'linear-gradient(to right, #C9A96E, transparent)' }} />
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#2C2825',
            lineHeight: 1.2,
            margin: '0 0 16px',
          }}>
            Thông Tin Tiệc Cưới
          </h2>

          <p style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '1.05rem',
            color: '#7A6E66',
            maxWidth: 420,
            margin: '0 auto 16px',
            lineHeight: 1.65,
          }}>
            Trân trọng kính mời quý vị đến chung vui cùng gia đình chúng tôi
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <div style={{ width: 24, height: 1, background: 'rgba(201,169,110,0.4)' }} />
            <span style={{ color: '#C9A96E', fontSize: 11, lineHeight: 1 }}>✦</span>
            <div style={{ width: 24, height: 1, background: 'rgba(201,169,110,0.4)' }} />
          </div>
        </motion.div>

        {/* ── Event cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 28,
        }}>
          <EventCard
            title="Hôn Lễ"
            delay={0.1}
            details={[
              { label: 'Ngày',      value: CEREMONY.date,  sub: CEREMONY.lunar },
              { label: 'Giờ',       value: CEREMONY.time },
              { label: 'Địa điểm', value: CEREMONY.venue, sub: CEREMONY.address },
            ]}
          />
          <EventCard
            title="Tiệc Cưới"
            delay={0.25}
            details={[
              { label: 'Ngày',      value: RECEPTION.date,  sub: RECEPTION.lunar },
              { label: 'Giờ',       value: RECEPTION.time },
              { label: 'Địa điểm', value: RECEPTION.venue, sub: RECEPTION.address },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
