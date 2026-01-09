function EmptyState({ title, description }) {
    return (
      <div className="text-center py-16 text-gray-600">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    )
  }
  
  export default EmptyState
  