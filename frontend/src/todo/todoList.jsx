import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const TodoList = props => {
	const renderRows = () => {
		const list = props.list || []
		return(
			list.map(
				linha => <tr key={ linha._id }>
							<td className={ linha.done ? 'markedAsDone' : ''}>{ linha.description }</td>
							<td>
								<IconButton 
									style='success'
									icon='check'
									onClick={() => props.handleMarkAsDone(linha)}
									hide={ linha.done }/>

								<IconButton 
									style='warning' 
									icon='undo'
									onClick={() => props.handleMarkAsPending(linha)}
									hide={ !linha.done }/>

								<IconButton 
									style='danger'
									icon='trash-o'
									onClick={() => props.handleRemove(linha)}
									hide={ !linha.done}/>
							</td>
						 </tr>
			)
		)
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Descrição</th>
					<th className='tableActions'>Ações</th>
				</tr>
			</thead>
			<tbody>
				{ renderRows() }
			</tbody>
		</table>
	)
}

const mapStateToProps = state => ({
	list: state.todo.list
})

export default connect(mapStateToProps)(TodoList)